import React from 'react';
import './index.css';
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

class Row extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="add-substract">
                    <button>
                        <MdAddCircleOutline />
                    </button>
                    <button>
                        <MdRemoveCircleOutline />
                    </button>
                </div>
                <div>
                    <img className="product-image" alt="product" src={this.props.rowData.imageURL} />
                </div>
                <div className="row-inputs">
                    <div className="left-inputs">
                        <input className="input" placeholder="Nombre del producto" />
                        <input placeholder="Descripción del producto" />
                    </div>
                    <input placeholder="Código del producto" />
                </div>
                <div className="add-substract">
                    <button>
                        <MdAddCircleOutline />
                    </button>
                    <button>
                        <MdRemoveCircleOutline />
                    </button>
                </div>
            </div>
        );
    }

}

export default Row;
