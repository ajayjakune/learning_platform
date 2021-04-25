import React from 'react';
import { Row } from 'react-bootstrap';
import Video from './video';
import Extras from './extras';
import { SideNavData } from './SideNavData';

function LectureVid(props) {
    return (
        <div>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)" }}>
                <Video video={props.link} />
            </Row>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)", height: "400px" }}>
                <Extras resources={props.resources} />
            </Row>
        </div>
    );
}

export default LectureVid;
