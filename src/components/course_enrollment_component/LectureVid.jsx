import React from 'react';
import { Container, Row, ResponsiveEmbed, Card, Tab, Tabs } from 'react-bootstrap';
import { AiOutlineLink } from "react-icons/ai";

function LectureVid(props) {
    return (
        <div>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)" }}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <video key={props.link} className="p-2" controls>
                        <source src={props.link} type="video/mp4" />
                        video tag is not supported.
                    </video>
                </ResponsiveEmbed>
            </Row>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)", height: "400px" }}>
                <Container>
                    <Tabs defaultActiveKey="doubts" id="extras-tab">
                        <Tab eventKey="doubts" title="Doubts??">
                            <Card className="mt-2" style={{ marginBottom: "10px", borderRadius: "5px" }}>
                                <Card.Header>Email Your Queries Here !! </Card.Header>
                                <Card.Body>
                                    <p><i>Author : </i>{props.author.author_name}</p>
                                    <p><i>Email : </i>{props.author.author_email}</p>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="resources" title="Resource">
                            <Card className="mt-2" style={{ marginBottom: "10px", borderRadius: "5px" }}>
                                <Card.Header>Reference Links</Card.Header>
                                <Card.Body>
                                    <Card.Text className="resource-card-body">
                                        <ul style={{ listStyleType: "none" }}>
                                            {
                                                props.resources.map((resource, index) => {
                                                    return <li key={index}><AiOutlineLink /><a href={`${resource.link}`} target="_blank" rel="noreferrer">{resource.title}</a></li>
                                                })}
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Container>
            </Row>
        </div>
    );
}

export default LectureVid;
