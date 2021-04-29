// Pokegame should take your list of 8 pokemon and randomly assign them 
    //into two hands of 4 cards each. It should then render two Pokedex 
    // components, one for each hand.
import React from "react";
import Pokedex from "./Pokedex";

class Pokegame extends React.Component {
    render() {
        const pokemon = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]

        let hand1 = []
        let hand2 = []
        function assignHand(cardDeck) {
            const cards = cardDeck.length
            for (let i = 0; i < cards; i++) {
                const randomNum = Math.floor(Math.random() * cardDeck.length);
                const randomCard = cardDeck[randomNum];
                if(hand1.length <= hand2.length) {
                    hand1.push(randomCard)
                    cardDeck.splice(randomNum, 1)
                } else {
                    hand2.push(randomCard)
                    cardDeck.splice(randomNum, 1)
                }
            }
        }
        function expTotal(hand) {
            let total = 0;
            hand.forEach(card => {
                total += card.base_experience
            });
            return total
        }
        assignHand(pokemon)
        let hand1Total = expTotal(hand1)
        let hand2Total = expTotal(hand2)
        return(
            <div className="Pokegame">
                <Pokedex cards={hand1} totalExp={hand1Total} isWinner = { hand1Total > hand2Total ? true : false}/>
                <Pokedex cards={hand2} totalExp={hand2Total} isWinner = { hand2Total > hand1Total ? true : false}/>
            </div>
        )
    }
}

export default Pokegame;