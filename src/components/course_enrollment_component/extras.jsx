import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Resource from './resource';
import QnA from './qna';
import Doubt from './doubt';

function Extras(props) {

    return <Container>
        <Tabs defaultActiveKey="doubts" id="extras-tab">
            <Tab eventKey="doubts" title="Doubts??">
                <Doubt details={props.transcript} />
            </Tab>
            <Tab eventKey="resources" title="Resource">
                <Resource />
            </Tab>
            <Tab eventKey="qna" title="QnA" >
                <QnA />
            </Tab>
        </Tabs>
    </Container>;
}

export default Extras;