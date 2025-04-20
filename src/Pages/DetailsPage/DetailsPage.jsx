import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../Components/CharacterDetail/CharacterDetail';

const DetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      const data = await res.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <>
      {character ? <CharacterDetail character={character} /> : <p>Cargando...</p>}
    </>
  );
};

export default DetailPage