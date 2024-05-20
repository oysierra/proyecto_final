import React from 'react';
import './Table.css'; // Asegúrate de crear los estilos correspondientes

function Table() {
    const players = [
        { id: 1, name: 'Lionel Messi', position: 'Forward', goals: 35, age: 34 },
        { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', goals: 48, age: 36 },
        { id: 3, name: 'Neymar Jr', position: 'Forward', goals: 21, age: 29 },
        { id: 4, name: 'Lewandowski', position: 'Forward', goals: 30, age: 35 },
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
