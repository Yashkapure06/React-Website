import React from 'react';

import Header from './Header';
import PortfolioItem from './PortfolioItem';

import Image from '../assets/image/portfolio.jpg';

class Portfolio extends React.Component {
    render(){

        return(
            <div>
                <Header
                    title="Welcome to Our Portfolio!"
                    subtitle="Have A Look At Our Portfolio"
                    buttonText="Tell me More"
                    link="/services"
                    // showButton={true}
                    image = {Image}
                />
                <PortfolioItem/>
            </div>
        )
    }
}
export default Portfolio;