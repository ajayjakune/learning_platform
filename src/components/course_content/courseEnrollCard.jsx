// import React, { useState } from 'react'
// import './css/courseEnrollCard.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const CourseEnrollCard = (props) => {

//     const [btnText, setBtnText] = useState('Enroll for the Course');


//     return (
//         <div className="card card-size float-card sticky">
//             <img className="card-img-top round" src={`${props.courseImg}`} alt="course" />
//             <div className="card-body row justify-content-center">
//                 <h5 className="card-title text-center">{props.courseTitle}</h5>
//                 <Link to="/" className="btn lead btn-outline-primary" onClick={() => btnText === 'Enroll for the Course' ? setBtnText('Go to course') : setBtnText('Enroll for the Course')}>{btnText}</Link>
//             </div>
//         </div>
//     )
// }

// export default CourseEnrollCard
