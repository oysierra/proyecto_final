import React, { useState } from 'react';
import './App.css'; // Importar estilos si es necesario
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';
import { colorEvenRows, colorOddRows, filterRecords, filterTable } from './utils';

function App() {
    const [tableRows, setTableRows] = useState([]);
    
    // Funciones para manejar los eventos de los botones
    const handleColorEvenRows = () => {
        colorEvenRows(tableRows);
    };

    const handleColorOddRows = () => {
        colorOddRows(tableRows);
    };

    const handleFilterRecords1To10 = () => {
        const filteredRows = filterRecords(tableRows, 1, 10);
        setTableRows(filteredRows);
    };

    const handleFilterRecords11To20 = () => {
        const filteredRows = filterRecords(tableRows, 11, 20);
        setTableRows(filteredRows);
    };

    return (
        <div className="App">
            <Header />
            <div className="buttons">
                <Button onClick={handleColorEvenRows} label="Color Pares" />
                <Button onClick={handleColorOddRows} label="Color Impares" />
                <Button onClick={handleFilterRecords1To10} label="Filtrar 1-10" />
                <Button onClick={handleFilterRecords11To20} label="Filtrar 11-20" />
            </div>
            <SearchInput onKeyUp={filterTable} placeholder="Buscar..." />
            <Table />
            <Footer />
        </div>
    );
}

export default App;

