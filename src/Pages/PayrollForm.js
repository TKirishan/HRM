import React, { useState } from 'react';
import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import ValueForm from './ValueForm';  
import PaySlip from './PaySlip';  

const Payroll = () => {
    const [payrunPeriod, setPayrunPeriod] = useState('');
    const [payrunType, setPayrunType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSave = () => {
        // Validate that both fields are filled
        if (!payrunPeriod || !payrunType) {
            setErrorMessage('Please fill in both fields');
            return;
        } else {
            setErrorMessage('');
            alert("Data saved successfully.");
        }

        // Optional logging, restricted to development mode
        if (process.env.NODE_ENV === 'development') {
            console.log('Payrun Period:', payrunPeriod);
            console.log('Payrun Generating Type:', payrunType);
        }
    };

    const handleCancel = () => {
        // Clear the form fields
        setPayrunPeriod('');
        setPayrunType('');
        setErrorMessage(''); // Clear error message when canceling
    };

    return (
        <Tab.Container defaultActiveKey="defaultPayrun">
            <Card>
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="value">Value</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="payslip">Payslip</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* Default Payrun Tab */}
                        <Tab.Pane eventKey="defaultPayrun">
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                                <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
                            </Breadcrumb>

                            <Alert variant="info">
                                <Alert.Heading>How payrun works?</Alert.Heading>
                                <p>1. Pay run is applicable to generate pay slip for employees.</p>
                                <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
                            </Alert>

                            {/* Display error message if validation fails */}
                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                            <Form>
                                {/* Payrun Period Input */}
                                <Form.Group controlId="payrunPeriod" className="mb-3">
                                    <Form.Label>Payrun Period</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={payrunPeriod}
                                        placeholder="Enter Payrun Period"
                                        onChange={(e) => setPayrunPeriod(e.target.value)}
                                    />
                                </Form.Group>

                                {/* Payrun Generating Type Dropdown */}
                                <Form.Group controlId="payrunType" className="mb-3">
                                    <Form.Label>Payrun Generating Type</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={payrunType}
                                        onChange={(e) => setPayrunType(e.target.value)}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="hourly">Hourly wise</option>
                                        <option value="salary">Monthly wise</option>
                                    </Form.Control>
                                </Form.Group>

                                <div className="mt-4">
                                    <Button variant="primary" onClick={handleSave}>
                                        Save
                                    </Button>
                                    <Button variant="secondary" className="ms-2" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Tab.Pane>

                        {/* Value Tab */}
                        <Tab.Pane eventKey="value">
                            {/* ValueForm component handles value-related settings */}
                            <ValueForm />
                        </Tab.Pane>

                        {/* Payslip Tab */}
                        <Tab.Pane eventKey="payslip">
                            {/* PaySlip component handles payslip generation */}
                            <PaySlip />
                        </Tab.Pane>

                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Payroll;
