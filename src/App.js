import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Table from './components/table';
import SearchInput from './components/searchInput';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="buttons">
        <Button onClick={colorEvenRows} label="Color Pares" />
        <Button onClick={colorOddRows} label="Color Impares" />
        <Button onClick={() => filterRecords(1, 10)} label="Filtrar 1-10" />
        <Button onClick={() => filterRecords(11, 20)} label="Filtrar 11-20" />
      </div>
      <SearchInput />
      <div className="content-area">
        <h2>Top Scorers</h2>
        <div className="table-container">
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
