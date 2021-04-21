import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import NavTab from './navTab';
import { SideNavData } from './SideNavData';


const SideNav = function () {

    const chapters = SideNavData.map((item, index) => (
        < NavTab chapterName={item.title} keyVal={"lecture-" + index} lectures={item.lectures} />
    ));

    return (
        <div className="sidebar-main">
            <Card className="sidebar-main-card">
                <Card.Header>Course Name</Card.Header>
            </Card>
            {chapters}
        </div>
    );
}
export default SideNav;