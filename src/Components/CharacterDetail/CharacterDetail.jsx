import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({ character }) => {
    return (
        <>
            <div className="card-container">
                <div className="image-box">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="character-image"
                    />
                    {console.log("URL de la imagen:", character.image)}
                </div>

                <div className="info-section">
                    <h1>{character.name}</h1>
                    <p><strong>Raza:</strong> {character.race}</p>
                    <p><strong>Género:</strong> {character.gender}</p>
                    <p><strong>Ki:</strong> {character.ki}</p>
                    <p><strong>MaxKi:</strong> {character.maxKi}</p>
                    <p><strong>Afiliación:</strong> {character.affiliation}</p>
                </div>
            </div>
        </>
    );
};

export default CharacterDetail