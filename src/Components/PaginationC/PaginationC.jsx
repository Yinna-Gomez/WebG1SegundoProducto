import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PaginationC.css';

const PaginationC = ({ count, page, onPageChange }) => {
  return (
    <div id="paginationContainer">
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={(event, value) => onPageChange(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>

  );
};

export default PaginationC