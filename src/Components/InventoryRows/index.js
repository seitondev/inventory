import React from 'react';
import './index.css';
import Row from './Row';

class InventoryRows extends React.Component {

    renderRows(rowsData) {
        let rows = []
        rowsData.forEach(row => {
            rows.push(<Row rowData={row} />)
        });
        return rows;
    }

    render() {
        return(
            <div className="rows">
                { this.renderRows(this.props.rowsData) }
            </div>
        );
    }

}

export default InventoryRows;
