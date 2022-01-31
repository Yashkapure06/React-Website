import React from 'react';
import Header from '../Common/Header'
import Image from '../assets/image/header-bg.jpg';

// Reusable Components
import SingleServices  from '../Common/SingleService';
import PortfolioItem from '../Common/PortfolioItem';
import Aboutus from '../Common/Aboutus';
import Team from '../Common/Team';

class Home extends React.Component {

    render(){

        return (
            <div>
                
                <Header
                    title="Welcome to Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me More"
                    link="/services"
                    showButton={true}
                    image = {Image}
                />
                <br/>
                <SingleServices />
                <PortfolioItem />
                <Aboutus />
                <Team />
            </div>
            )
    }


}
export default Home;