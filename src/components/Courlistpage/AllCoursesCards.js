import React,{useState, useEffect} from 'react'
import SingleCard from '../Homepage/DomainCards/SingleCard'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './AllCoursesCards.css'
import axios from 'axios'


const AllCoursesCards = (props) => {
    
    const domainId = props.match.params.id;
    const [courseList, setCourseList] = useState([])
    const [domainName, setDomainName] = useState('')

    // const courseList = [
    //     {
    //         "_id": "608271ce0ffb371d38b95daf",
    //         "domain": {
    //             "domain_name": "Web Development"
    //         },
    //         "course_name": "React - The Complete Guide",
    //         "course_description": "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing and way more!",
    //         "course_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    //     },
    //     {
    //         "_id": "60827cdf0ffb371d38b95db0",
    //         "domain": {
    //             "domain_name": "Web Development"
    //         },
    //         "course_name": "The Complete JavaScript Course",
    //         "course_description": "The modern JavaScript course for everyone! Master JavaScript.",
    //         "course_photo": "https://raw.githubusercontent.com/ajayjakune/resourses/main/javascript.png"
    //     }
    // ]


    useEffect(() => {
        axios.get(`http://localhost:5000/${domainId}/courses`)
        .then( res => {
            setCourseList(res.data)
            setDomainName(res.data[0].domain.domain_name)
        })
        .catch( err => console.log(err))
    }, [domainId])

    return (
        <div >
            <div className="container" style={{ marginTop: "15px"}}>
                
            <Jumbotron className="fvid" style={{ color: "white", height: "33vh", marginBottom: "10px"}}>
                <h1>Welcome to {domainName} !</h1>
                <h5>
                    We have a lot of <span style={{ color: "orange", fontWeight: "bold" }}>EXCITING</span> courses for you in this corpus.
                </h5>

            </Jumbotron>
                
                <h2 style={{ color: "black" }}>
                    Courses
                </h2>
                <hr/>
                
                <div className="row"> 
                
                {
                    courseList.map( (course, index) => 
                            <SingleCard key={index} title={course.course_name} for='course' description={course.course_description} imageUrl={course.course_photo} cardId={course._id} buttonText={"See Course content ->"}/> 
                        )
                }
                </div>
            <div/>
        </div>
       </div>
    )
}

export default AllCoursesCards
