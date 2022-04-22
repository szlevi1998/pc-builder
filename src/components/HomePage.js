import React from 'react';
import NavBar from '../NavBar';
import {Carousel} from 'react-bootstrap';
import '../stylesheets/homepage.css';

function Home() {
    return (<div>
            <NavBar/>
            <h1 className='h1'>Üdvözöllek az oldalamon!</h1>
            <section className='carousel-class'>
                <Carousel>
                    <Carousel.Item className='first-slide'>
                        <img
                            className='img-fluid'
                            src='https://techforgamer.in/wp-content/uploads/2019/09/spec_06_rgb_video_loop.jpg'
                            alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3>Szűcs Levente</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='second-slide'>
                        <img
                            className='img-fluid'
                            src='https://wallpaper.dog/large/10837205.jpg'
                            alt='Second slide'
                        />

                        <Carousel.Caption>
                            <h3>TAIJUA</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='third-slide'>
                        <img
                            className='img-fluid'
                            src='https://www.newegg.com/insider/wp-content/uploads/2019/03/dark-flash-i5-build-gaming-PC.jpg'
                            alt='Third slide'
                        />

                        <Carousel.Caption>
                            <h3>Szakdolgozat munka</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default class HomePage extends React.Component {
    render() {
        return <Home/>;
    }
}