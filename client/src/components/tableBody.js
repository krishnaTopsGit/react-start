import React from 'react';

const TableBody = props => {

    const row = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.editCharacter(row)}>Edit</button>
                    <button onClick={() => props.removeCharacter(row,index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return (
        <tbody>{row}</tbody>
    );
}

export default TableBody;