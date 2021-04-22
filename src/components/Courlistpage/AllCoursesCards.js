import React from 'react'
import Courses from './courses'
import SingleCard from '../Homepage/DomainCards/SingleCard'
import Jumbotron from 'react-bootstrap/Jumbotron'


const AllCoursesCards = () => {


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
        const singleCard = course.course_list.map((single) => {
            console.log(single.id)
            return (
                <SingleCard Title={single.course_name} Description={single.description} ImageUrl={single.src} button={"See Course content ->"} url={'/course_content'} />
            )
        })

        return (singleCard)
    })



    // const allCourses =  Courses.domains.course_list.length()
    // console.log(allCourses)
    // console.log("Hello !")
    return (
        <div >
            <div className="container" style={{ marginTop: "17px" }}>

                <Jumbotron style={{ backgroundColor: "lightgreen" }}>
                    <h1>Welcome to Web Development !</h1>
                    <h5>
                        We have a lot of <span style={{ color: "orange", fontWeight: "bold" }}>EXCITING</span> courses for you in this corpus.
                </h5>

                </Jumbotron>

                <h2>
                    Courses
                </h2>
                <hr />

                <div className="row">

                    {getAllCourseCards}


                </div>
                <div />
            </div>
        </div>
    )
}

export default AllCoursesCards
