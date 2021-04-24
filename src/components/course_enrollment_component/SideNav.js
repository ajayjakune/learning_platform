import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './courseEnroll.css';
import NavTab from './navTab';
import { SideNavData } from './SideNavData';
import { GiBookPile } from 'react-icons/gi'


const SideNav = function (props) {

    const chapters = SideNavData.map((item, index) => (
        < NavTab chapterName={item.title} chapterNum={item.chapterNum} keyVal={"lecture-" + index} lectures={item.lectures} />
    ));

    return (
        <div className="sidebar-main">
            <Card className="text-white bg-dark sidebar-main-card">
                <Card.Header>Course Name</Card.Header>
            </Card>
            {chapters}
            <Button href="/chapter/quiz" variant="dark" size="lg" block style={{ width: "90%", margin: "10px 0 10px 17px" }}>< GiBookPile/>&nbsp;Quiz</Button>
        </div>
    );
}
export default SideNav;