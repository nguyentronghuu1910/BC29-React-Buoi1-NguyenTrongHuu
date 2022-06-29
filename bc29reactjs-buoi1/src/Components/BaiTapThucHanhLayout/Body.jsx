import React, { Component } from 'react';
import CardContent from './CardContent';
import Carousel from './Carousel';

export default class Body extends Component {
    render() {
        return (
            <div>
                <Carousel />

                <section className='container py-5'>
                    <div className='row'>
                        <CardContent />
                        <CardContent />
                        <CardContent />
                        <CardContent />
                    </div>
                </section>
            </div>
        );
    }
}
