import React from 'react';
import { Row } from 'react-bootstrap';
import Video from './video';
import Extras from './extras';
import { SideNavData } from './SideNavData';

function LectureVid(props) {
    const chapterNumber = props.match.params.chapterNumber || 1;
    const lectureNumber = props.match.params.lectureNumber || 1;

    const chapter = SideNavData.filter(function (chapter) {
        return chapter.chapterNum === parseInt(chapterNumber);
    });
    const currentlecture = chapter[0].lectures.filter(function (lecture) {
        return lecture.lectureNum === parseInt(lectureNumber);
    });

    return (
        <div>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)" }}>
                <Video video={currentlecture[0].link} />
            </Row>
            <Row style={{ backgroundColor: "rgb(211, 208, 208)", height: "400px" }}>
                <Extras transcript={currentlecture[0].transcript} />
            </Row>
        </div>
    );
}

export default LectureVid;
