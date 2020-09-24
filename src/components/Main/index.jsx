import React from 'react';

import Header from '../Header/index';
import Card from '../Cards/index';
import Footer from '../Footer/index';

import './style.css'

export default props => {
    return (
        <div>
            <Header titulo="GoodTrip" />
            <Card />
            <Footer></Footer>
        </div>
    )
}