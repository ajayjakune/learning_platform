import React, { useState } from 'react';
import { Container, Row, ResponsiveEmbed, Card, Tab, Tabs, Modal } from 'react-bootstrap';
import { AiOutlineLink } from "react-icons/ai";
import { useForm, ValidationError } from '@formspree/react';

function LectureVid(props) {
    const [userQuery, setUserQuery] = useState(false);
    const [state, handleSubmit] = useForm("mdoyaood")

    const handleUserquery = () => {
        setUserQuery(!userQuery);
    }

    return (
        <>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)" }}>
                <ResponsiveEmbed aspectRatio="21by9">
                    <video key={props.link} className="p-2" controls>
                        <source src={props.link} type="video/mp4" />
                        video tag is not supported.
                    </video>
                </ResponsiveEmbed>
            </Row>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)", height: "70vh" }}>
                <Container>
                    <Tabs defaultActiveKey="help" id="extras-tab">
                        <Tab eventKey="help" title="Help">
                            <Card className="mt-2 overflow-auto" style={{ marginBottom: "10px", borderRadius: "5px" }}>
                                <Card.Header>Please share your doubts below</Card.Header>
                                <Card.Body>
                                    <form onSubmit={handleSubmit} action="https://formspree.io/f/mdoyaood" method="POST">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="query">Enter your query</label>
                                            <textarea className="form-control" name="query" id="query" rows={3}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success" onClick={handleUserquery}>Submit</button>
                                        {
                                            userQuery
                                                ? <Modal show={state.succeeded} onHide={setUserQuery}>
                                                    <Modal.Header>
                                                        <Modal.Title>
                                                            Query Submitted!
                                                            </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <p>Your query has been recorded! </p>
                                                        <p>We will try to reach you as soon as possible</p>
                                                    </Modal.Body>
                                                </Modal>
                                                : null
                                        }
                                    </form>

                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="resources" title="Resource">
                            <Card className="mt-2" style={{ marginBottom: "10px", borderRadius: "5px" }}>
                                <Card.Header>Reference Links</Card.Header>
                                <Card.Body className="resource-card-body">
                                    <ul style={{ listStyleType: "none" }}>
                                        {
                                            props.resources.map((resource, index) => {
                                                return <li key={index}><AiOutlineLink /><a href={`${resource.link}`} target="_blank" rel="noreferrer">{resource.title}</a></li>
                                            })}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Container>
            </Row>
        </>
    );
}

export default LectureVid;
