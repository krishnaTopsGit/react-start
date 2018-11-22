import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    render() {
        const { characterData , removeCharacter , editCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                    editCharacter={editCharacter}
                />
            </table>
        );
    }
}

export default Table;