import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import DailyLog from './Att_DailyLog';
import AttendanceDetails from './AttendanceDetails';

import Summary from './Summary';

const Attendance = () => {
    return (
        <Tab.Container defaultActiveKey="Att_DailyLog"> {/* Ensure that "Att_DailyLog" is correct */}
            <Card>
                {/* Horizontal Navbar in Card.Header */}
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="Att_DailyLog">Daily Log</Nav.Link> {/* No typo in eventKey */}
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="AttendanceDetails">Attendance Details</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="Summary">Summary</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* Daily Log Content */}
                        <Tab.Pane eventKey="Att_DailyLog">
                            <DailyLog /> {/* Ensure the DailyLog component is defined correctly */}
                        </Tab.Pane>
                        
                        {/* Attendance Details Content */}
                        <Tab.Pane eventKey="AttendanceDetails">
                            <AttendanceDetails /> {/* Ensure the AttendanceDetails component is defined correctly */}
                        </Tab.Pane>

                        {/* Summary Content */}
                        <Tab.Pane eventKey="Summary">
                            <Summary />  {/* Ensure the Summary component is defined correctly */}
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Attendance;
