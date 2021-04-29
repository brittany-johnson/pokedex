// Is provided, via props, an array of objects describing different pokemon, 
    // and renders a series of Pokecard components.
import React from "react";
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                <div>
                <span className="Pokedex-Exp">Total EXP: {this.props.totalExp}</span>
                <span className="Pokedex-Result">{this.props.isWinner ? "THIS HAND WINS!" : "Loserrr"}</span>
                </div>
                <Pokecard cards={this.props.cards}/>
            </div>
        )
    }
}

export default Pokedex;