import React from 'react'
import SingleCard from './SingleCard'
// import "./Cards.css"
import Courses from './courses'

const AllDomainsCards = (props) => {

    
    const allDomainsCards = Courses.domains.map( (domain) => {
            // console.log(domain.category)
            // console.log(domain.description)
            return (
                <SingleCard setselectedCard={props.setselectedCard} Title={domain.category} Description={domain.description} ImageUrl={domain.url} button={"Explore !"}/>
            ) 
        })
    

    return (
        <div >
            <div className="container" style={{ marginTop: "17px"}}>
        
                <h2 style={{ color: "black" }}>
                    Domains
                </h2>
                <hr/>
                
                <div className="row"> 
                
                {allDomainsCards}

                </div>
            <div/>
        </div>
       </div> 
    )
}

export default AllDomainsCards
