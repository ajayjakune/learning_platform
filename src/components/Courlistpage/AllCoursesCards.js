import React from 'react'
import Courses from './courses'
import SingleCard from '../Homepage/DomainCards/SingleCard'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './AllCoursesCards.css'


const AllCoursesCards = (props) => {
    
    
    var category = "Web Development"

    // const getCourseList = (category) => {
    //     console.log("object")
    //     const reqDomain = Courses.domains.filter((domain) => domain.category === category);
    //     console.log(reqDomain)

    //     // Courses.domains.map((domain) => {
    //     //     domain.course_list.map((single)=> {
    //     //         console.log(single.course_name) 
    //     //     } )
    //     // })
    // }

    const reqDomain = Courses.domains.filter((domain) => domain.category === category);

    const getAllCourseCards = reqDomain.map((course) => {
        const singleCard = course.course_list.map((single)=> {
            // console.log(single.id)
            return (
               <SingleCard setselectedCard={props.setselectedCard} Title={single.course_name} Description={single.description} ImageUrl={single.src} Id={single.id} button={"See Course content ->"}/> 
            )
       } )

       return (singleCard)
   })



    // const allCourses =  Courses.domains.course_list.length()
    // console.log(allCourses)
    // console.log("Hello !")
    return (
        <div >
            <div className="container" style={{ marginTop: "15px"}}>
                
            <Jumbotron className="fvid" style={{ color: "white", height: "33vh", marginBottom: "10px" }}>
                <h1>Welcome to {category} !</h1>
                <h5>
                    We have a lot of <span style={{ color: "orange", fontWeight: "bold" }}>EXCITING</span> courses for you in this corpus.
                </h5>

            </Jumbotron>
                
                <h2 style={{ color: "black" }}>
                    Courses
                </h2>
                <hr/>
                
                <div className="row"> 
                
                {getAllCourseCards}

            
                </div>
            <div/>
        </div>
       </div>
    )
}

export default AllCoursesCards
