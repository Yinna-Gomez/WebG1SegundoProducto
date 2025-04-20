import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import PaginationC from '../../Components/PaginationC/PaginationC';
import './FilterPage.css';

const FilterPage = () => {
    const { genero } = useParams(); // 'Male' o 'Female'
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const itemsPerPage = 10;

    useEffect(() => {
        const fetchAllPages = async () => {
            let allCharacters = [];
            let page = 1;
            let totalPagesApi = 1;

            do {
                const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
                const data = await response.json();
                totalPagesApi = data.meta.totalPages;
                allCharacters = [...allCharacters, ...data.items];
                page++;
            } while (page <= totalPagesApi);

            const filtered = allCharacters.filter(characters => characters.gender === genero);
            setFilteredCharacters(filtered);
            setTotalPages(Math.ceil(filtered.length / itemsPerPage));
            setCurrentPage(1); // Reinicia si se cambia el género
        };

        fetchAllPages();
    }, [genero]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredCharacters.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <main className="filter-page">
                {paginatedItems.map((user) => (
                    <Link to={`/details/${user.id}`} key={user.id}>
                        <CardCharacter character={user} />
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

export default FilterPage

