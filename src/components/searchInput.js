import React from 'react';
import { filterTable } from '../utils/filterUtils';

function SearchInput() {
    return (
        <input type="text" id="searchInput" onKeyUp={filterTable} placeholder="Buscar..." />
    );
}

export default SearchInput;
