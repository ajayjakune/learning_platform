import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Resource from './resource';
import Doubt from './doubt';

function Extras(props) {

    return <Container>
        <Tabs defaultActiveKey="doubts" id="extras-tab">
            <Tab eventKey="doubts" title="Doubts??">
                <Doubt />
            </Tab>
            <Tab eventKey="resources" title="Resource">
                <Resource resources={props.resources} />
            </Tab>
        </Tabs>
    </Container>;
}

export default Extras;