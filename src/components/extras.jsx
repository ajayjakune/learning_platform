import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Resource from './resource';
import QnA from './qna';
import Transcript from './transcript';

function Extras(props) {

    return <Container>
        <Tabs defaultActiveKey="transcript" id="uncontrolled-tab-example">
            <Tab eventKey="transcript" title="Transcript">
                <Transcript />
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