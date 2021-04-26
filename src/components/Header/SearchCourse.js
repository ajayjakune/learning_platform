import React from 'react'
import {Link} from 'react-router-dom'

function SearchCourse(props) {
    return (
        <>
            <div className="result-course">
                <Link to={`/course/${props.courseId}`} style={{color:"black"}} onClick={props.onSelect}>
                    <img 
                    src={props.img}
                    width="40"
                    height="40"
                    alt="course"
                    style={{objectFit:"cover"}}/>
                    <div className="course-name">
                        <h6>{props.name}</h6>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SearchCourse
