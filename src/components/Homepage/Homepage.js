import React from 'react'
import HomeCarousel from './HomepageCarousel/HomeCarousel'
import AllDomainsCards from './DomainCards/AllDomainsCards'

const Homepage = (props) => {
    return (
        <div>
            <HomeCarousel/>
            <AllDomainsCards setselectedCard={props.setselectedCard}/>
        </div>
    )
}

export default Homepage
