import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HomeCarousel.css'


const HomeCarousel = () => {
    return (
        <div>
            <Carousel controls={false}>
                <Carousel.Item interval={3500}>
                    <div className="autofit">
                    {/* <img
                        className="d-block w-100 fnormalize"
                        src="/home1.gif"
                        alt="First slide"
                    /> */}
                    <video className="d-block w-100 fnormalize" playsinline autoPlay muted loop>
                        <source src="/movie.mp4" type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <Carousel.Caption>
                    <h3>Enjoy the new Persistent <span style={{ color: "#FFD700"}}>Gurukul</span> learning Platform !</h3>
    
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={2050}>
                    <div className="autofit">
                        <img
                        className="d-block w-100 home2"
                        src="/home2.png"
                        alt="Second slide"
                        />
                    </div>
                </Carousel.Item>

                
                <Carousel.Item interval={2050}>
                    <div className="autofit">
                        <img
                        className="d-block w-100 home3"
                        src="/home3.png"
                        alt="Third slide"
                        />
                    </div>
            
                </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default HomeCarousel
