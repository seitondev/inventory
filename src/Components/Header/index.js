import React from 'react';
import './index.css';

class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <p className="brand-name header-text">SEITON</p>
                <p className="header-title header-text">INVENTARIO</p>
            </div>
        );
    }

}

export default Header;
