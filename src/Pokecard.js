// Shows a single Pokemon, with their name, image, and type.
import React from "react";
import './Pokecard.css';

class Pokecard extends React.Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ],
    }
    render() {
        const { cards } = this.props
        return (
            cards.map(p => 
                <div className="Pokecard">
                    <span className="Pokecard-name">{p.name}</span>
                    <img className="Pokecard-img" alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} />
                    <span className="Pokecard-type">{p.type}</span>
                    <span className="Pokecard-exp">EXP: {p.base_experience}</span>
                </div>
            )
        )
    }
}

export default Pokecard;