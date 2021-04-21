import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './HomeCarousel.css'


const HomeCarousel = () => {
    return (
        <div>
            <Carousel controls={false}>
                <Carousel.Item interval={2000}>
                    <div className="autofit">
                    <img
                        className="d-block w-100 fnormalize"
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="First slide"
                    />
                    </div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={2000}>
                    <div className="autofit">
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
          
          
                <Carousel.Item interval={2000}>
                    <div className="autofit">
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default HomeCarousel
