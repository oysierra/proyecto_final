import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';

import { colorEvenRows, colorOddRows, filterRecords, filterTable } from './utils';

function App() {

  const handleColorEvenRows = () => {
    colorEvenRows();
  };

  const handleColorOddRows = () => {
    colorOddRows();
  };

  return (
    <div className="App">
      <Header />
      <div className="buttons">
        <Button onClick={handleColorEvenRows} label="Color Pares" />
        <Button onClick={handleColorOddRows} label="Color Impares" />
        <Button onClick={() => filterRecords(1, 10)} label="Filtrar 1-10" />
        <Button onClick={() => filterRecords(11, 20)} label="Filtrar 11-20" />
      </div>

      <SearchInput onKeyUp={filterTable} placeholder="Buscar..." />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
