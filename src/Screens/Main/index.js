import React from 'react';
import './index.css';
import Header from './../../Components/Header';
import SubHeader from './../../Components/SubHeader';
import InventoryRows from './../../Components/InventoryRows';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rowsData: [
                {
                    id: 1,
                    imageURL: "https://tienda.schneck.com.uy/public/web/img/logo-og.png",
                },
                {
                    id: 2,
                    imageURL: "https://tienda.schneck.com.uy/public/web/img/logo-og.png",
                },
                {
                    id: 3,
                    imageURL: "https://tienda.schneck.com.uy/public/web/img/logo-og.png",
                }
            ],
        };
      }

    render() {
        return(
            <div className="main-container">
                <Header />
                <SubHeader />
                <InventoryRows rowsData={this.state.rowsData} />
            </div>
        );
    }

}

export default Main;
