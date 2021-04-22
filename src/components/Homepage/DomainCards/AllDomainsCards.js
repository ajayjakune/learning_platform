import React from 'react'
import SingleCard from './SingleCard'
// import "./Cards.css"
import Courses from './courses'

const AllDomainsCards = () => {

    const allDomainsCards = Courses.domains.map((domain) => {
        console.log(domain.category)
        console.log(domain.description)
        return (
            <SingleCard Title={domain.category} Description={domain.description} ImageUrl={domain.url} button={"Explore !"} url={'/course_list'} />
        )
    })


    return (
        <div >
            <div className="container" style={{ marginTop: "17px" }}>

                <h2>
                    Domains
                </h2>
                <hr />

                <div className="row">

                    {allDomainsCards}

                </div>
                <div />
            </div>
        </div>
    )
}

export default AllDomainsCards
