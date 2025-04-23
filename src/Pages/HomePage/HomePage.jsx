import { useEffect, useState } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import PaginationC from "../../Components/PaginationC/PaginationC";
import { Link } from 'react-router-dom';

const itemsPerPage = 10;

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=${itemsPerPage}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.items);
        setTotalPages(data.meta.totalPages);
      });
  }, [currentPage]);

  return (
    <>
      <main>
        {characters.map((char) => (
          <Link to={`/details/${char.id}`} key={char.id} style={{ textDecoration: 'none' }}>
            <CardCharacter character={char} />
          </Link>
        ))}

      </main>
      <PaginationC
        count={totalPages}
        page={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage