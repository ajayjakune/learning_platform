import React from 'react'
import HomeCarousel from './Carousel/HomeCarousel'
import Cards from './DomainCard/Cards'

const Homepage = () => {
    // const userdata = localStorage.getItem('userdata');
    const token = localStorage.getItem('jwt');
    const id = localStorage.getItem('userid');
    return (
        <div>
            <HomeCarousel />
            <Cards />
            <p>User Name:{token} {id}</p>
        </div>
    )
}


export default Homepage
