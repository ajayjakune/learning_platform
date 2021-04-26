import React, { useState } from 'react';
import { Container, Row, ResponsiveEmbed, Card, Tab, Tabs, Form, Button, Modal } from 'react-bootstrap';
import { AiOutlineLink } from "react-icons/ai";

function LectureVid(props) {
    const [userQuery, setUserQuery] = useState(false);

    const handleQuerySubmission = (e) => {
        e.preventDefault();
    }
    const handleUserquery = () => {
        setUserQuery(!userQuery);
    }

    return (
        <div>
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
                                    {/* <p><i><strong>Author : </strong></i>{props.author.author_name}</p>
                                    <p><i><strong>Email : </strong></i>{props.author.author_email}</p> */}
                                    <Form onSubmit={handleQuerySubmission}>
                                        <Form.Group controlId="userEmailId">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="Query">
                                            <Form.Label>Query</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" onClick={handleUserquery}>
                                            Submit
                                        </Button>
                                        {
                                            userQuery
                                                ? <Modal show={userQuery} onHide={setUserQuery}>
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
                                    </Form>

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
