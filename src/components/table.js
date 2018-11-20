import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    render() {
        const { characterData } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        );
    }
}

export default Table;