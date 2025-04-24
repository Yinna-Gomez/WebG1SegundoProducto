import React from 'react';
import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/error.jpeg';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='error-page'>
      <h1 className="error-title">Página no encontrada</h1>
      <button className="error-button" onClick={() => navigate('/')}>
        VOLVER AL INICIO
      </button>
      <img src={errorImage} alt="Error" className="error-img" />
    </div>
  );
};

export default ErrorPage;