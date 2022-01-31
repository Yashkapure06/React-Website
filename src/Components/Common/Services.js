import React from 'react';
import Header from '../Common/Header';
// import SingleService from './SingleService';
import Image from '../assets/image/services.jpg';


// const services = [
//     {title: 'E-commerce',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-shopping-cart'},
//     {title: 'Responsive Design',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-laptop'},
//     {title: 'Web Security',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-lock'},
// ];
class Services extends React.Component {

    
    render() {
        return(
            <div>
                <Header
                    title="Our Services"
                    subtitle="Best Services offered by us"
                    buttonText="Tell me More"
                    image = {Image}
                />
               
                <section class="page-section" id="services">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">{this.props.title}</h2>
                            <h3 class="section-subheading text-muted">{this.props.subtitle}</h3>
                        </div>
                        <div class="row text-center">
                            <div class="col-md-4">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 class="my-3">E-Commerce</h4>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div class="col-md-4">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 class="my-3">Responsive Design</h4>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div class="col-md-4">
                                <span class="fa-stack fa-4x">
                                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 class="my-3">Web Security</h4>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            )
    }

}

export default Services;