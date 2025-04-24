import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({ character }) => {
    return (
        <div className="card-container">
            <div className="card-container1">
                <div className="card">
                    <div className="card-front image-box">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="character-image"
                        />
                    </div>

                    <div className="card-back info-section">
                        <h1>{character.name}</h1>
                        <p><strong>Raza:</strong> {character.race}</p>
                        <p><strong>Género:</strong> {character.gender}</p>
                        <p><strong>Ki:</strong> {character.ki}</p>
                        <p><strong>MaxKi:</strong> {character.maxKi}</p>
                        <p><strong>Afiliación:</strong> {character.affiliation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
