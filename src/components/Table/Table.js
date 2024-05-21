import React from 'react';
import './Table.css'; // Asegúrate de crear los estilos correspondientes

function Table() {
    const players = [
        { id: 1, name: 'Lionel Messi', position: 'Forward', goals: 35, age: 34 },
        { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', goals: 48, age: 36 },
        { id: 3, name: 'Neymar Jr', position: 'Forward', goals: 21, age: 29 },
        { id: 4, name: 'Lewandowski', position: 'Forward', goals: 30, age: 35 },
        { id: 5, name: 'Kane', position: 'Forward', goals: 34, age: 32 },
        { id: 6, name: 'Vini Jr', position: 'Forward', goals: 14, age: 27 },
        { id: 7, name: 'Jude', position: 'Forward', goals: 19, age: 21 },
        { id: 8, name: 'Guller', position: 'Forward', goals: 6, age: 19 },
        { id: 9, name: 'Nico W', position: 'Forward', goals: 10, age: 25 },
        { id: 10, name: 'Falcao', position: 'Forward', goals: 5, age: 35 },
        { id: 11, name: 'Rodrigo', position: 'Forward', goals: 9, age: 21 },
        { id: 12, name: 'Halland', position: 'Forward', goals: 34, age: 21 },
        { id: 13, name: 'Saka', position: 'Forward', goals: 18, age: 22 },

        // Add more players as needed
    ];

    return (
        <table className="players-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Goals</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {players.map(player => (
                    <tr key={player.id}>
                        <td>{player.id}</td>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>{player.goals}</td>
                        <td>{player.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
