import * as React from 'react';
import './CardCharacter.css';

const CardCharacter = ({ character }) => {
    return (
        <div className="cardcharacter">
            <div className="card-wrapper">
                <div className="image-box1">
                    <img src={character.image} alt={character.name} className="character-img" />
                </div>
                <div className="info-box">
                    <h1>{character.name}</h1>
                    <hr />
                    <p><strong> Raza:</strong> {character.race}</p>
                    
                </div>
            </div>
        </div>

    );
};

export default CardCharacter
  