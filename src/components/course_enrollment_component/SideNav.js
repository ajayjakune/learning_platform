import React from 'react';
import { Button, Card } from 'react-bootstrap';
// import '../../App.css';
import './courseEnroll.css';
import NavTab from './navTab';
import { SideNavData } from './SideNavData';


const SideNav = function () {

    const chapters = SideNavData.map((item, index) => (
        < NavTab chapterName={item.title} chapterNum={item.chapterNum} keyVal={"lecture-" + index} lectures={item.lectures} />
    ));

    return (
        <div className="sidebar-main">
            <Card className="sidebar-main-card">
                <Card.Header>Course Name</Card.Header>
            </Card>
            {chapters}
            <Button href="/chapter/quiz" size="lg" block>Quiz</Button>
        </div>
    );
}
export default SideNav;