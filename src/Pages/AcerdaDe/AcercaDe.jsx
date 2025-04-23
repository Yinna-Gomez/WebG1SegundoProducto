import React from 'react';
import './AcercaDe.css'; 

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <h1>Acerca de mí</h1>
      <p><strong>Nombre:</strong> Yinna Paola Gomez Mendoza</p>
      <p><strong>Correo:</strong> yi.gomez@udla.edu.co</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Yinna-Gomez" target="_blank" rel="noopener noreferrer">Yinna-Gomez</a></p>
      <p><strong>Proyecto:</strong> App de Dragon Ball con React y la API pública de Dragon Ball</p>
    </div>
  );
};

export default AcercaDe
