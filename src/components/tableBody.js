import React from 'react';

const TableBody = props => {
    const row = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });
    return (
        <tbody>{row}</tbody>
    );
}

export default TableBody;