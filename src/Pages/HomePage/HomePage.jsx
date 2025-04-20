import { useEffect, useState } from "react";
import CardCharacter from "../../Components/CardCharacter/CardCharacter";
import PaginationC from "../../Components/PaginationC/PaginationC";

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
          <CardCharacter key={char.id} character={char} />
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