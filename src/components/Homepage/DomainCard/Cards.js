import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import "./Cards.css"

const Cards = () => {
    return (
        <div >
            <div class="container" style={{ marginTop: "17px" }}>

                <h2>
                    Domains
                </h2>
                <hr />
                <div class="row">
                    <Link to="course_list">
                        <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                            <div class="card-homepage">
                                <div class="card-img-wrapper">
                                    <img class="card-img-top" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale" alt="Card image cap"></img>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Artificial Intelligence</h5>
                                    <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                    <a href="#" class="btn btn-primary">EXPLORE !</a>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3abk_X67V6coNsK1sH6jX2134EVcmghK2w&usqp=CAU" alt="Card image cap"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Web Development</h5>
                                <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                <a href="#" class="btn btn-primary">EXPLORE !</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="https://www.intelrealsense.com/wp-content/uploads/2020/04/header_robotic_automation-1024x576.jpg" alt="Card image cap"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Robotics</h5>
                                <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                <a href="#" class="btn btn-primary">EXPLORE !</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="https://blog.ipleaders.in/wp-content/uploads/2020/06/Blockchain1.jpg" alt="Card image cap"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Blockchain</h5>
                                <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                <a href="#" class="btn btn-primary">EXPLORE !</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="https://bournetocode.com/projects/GCSE_Computing_Fundamentals/pages/img/computer-network.jpg" alt="Card image cap"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Networks</h5>
                                <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                <a href="#" class="btn btn-primary">EXPLORE !</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12">
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="https://2.bp.blogspot.com/-SyYsE6lCBK4/WpbnmkKnvjI/AAAAAAAAFG4/iALBir1-WU0NzVTf-83eo3MB0kvaHZliQCLcBGAs/s1600/ad_logo_twitter_card.png" alt="Card image cap"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Andriod Development</h5>
                                <p class="card-text">Special title treatment Special title treatmentSpecial title treatment Special title treatment</p>
                                <a href="#" class="btn btn-primary">EXPLORE !</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <br />

        </div>
    )
}

export default Cards
