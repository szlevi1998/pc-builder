import React from 'react';
import NavBar from '../NavBar';
import '../stylesheets/guidance.css';
import {Carousel, Container} from "react-bootstrap";

function Guide() {
    return (
        <div>
            <NavBar/>

            <h3 className='guidance-h3'>Útmutató</h3>

            <h1 className='guidance-h1'>Teljesítmények</h1>
            <Container>
                <div>
                    <Carousel className='carousel-dark'>
                        <Carousel.Item className='first-item'>
                            <img
                                className='img-fluid'
                                src='https://cdn.mos.cms.futurecdn.net/S3z8Qrd735d3moNWWPsr35.png'
                                alt='First slide'
                            />
                            <Carousel.Caption>
                                <h5>Videókártya teljesítmények</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='second-item'>
                            <img
                                className='img-fluid'
                                src='https://cdn.mos.cms.futurecdn.net/QsQyNEqDQx4ENvo7FFh3y9.png'
                                alt='Second slide'
                            />

                            <Carousel.Caption>
                                <h5>Processzor teljesítmények</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='third-item'>
                            <img
                                className='img-fluid'
                                src='https://cdn.mos.cms.futurecdn.net/mRPGJmnvD7ruzEAHVr7uMH.png'
                                alt='Third slide'
                            />

                            <Carousel.Caption>
                                <h5>Memória teljesítmények</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>

        </div>
    );
}

export default class Guidance extends React.Component {
    render() {
        return <Guide/>;
    }
}