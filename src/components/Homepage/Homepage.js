import React from 'react'
import HomeCarousel from './Carousel/HomeCarousel'
import Cards from './DomainCard/Cards'

const Homepage = () => {
    const firstName = localStorage.getItem('first_name');
    const lastName = localStorage.getItem('last_name');
    return (
        <div>
            <HomeCarousel />
            <Cards />
            <p>User Name: {firstName + " " + lastName}</p>
        </div>
    )
}

export default Homepage
