import React, { useState } from 'react';
import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const PaySlip = () => {
    const [employeeID, setEmployeeID] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [employeeBankDetails, setEmployeeBankDetails] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleGeneratePaySlip = () => {
        // Validation for empty fields
        if (!employeeID || !employeeName || !employeeBankDetails) {
            setErrorMessage('Please fill all fields.');
        } else {
            setErrorMessage(''); // Clear error on successful validation
            alert('Generating PaySlip');

            // Proceed with the pay slip generation logic here
            if (process.env.NODE_ENV === 'development') {
                console.log('Employee ID:', employeeID);
                console.log('Employee Name:', employeeName);
                console.log('Employee Bank Details:', employeeBankDetails);
            }
        }
    };

    const handleCancel = () => {
        // Reset the form fields
        setEmployeeID('');
        setEmployeeName('');
        setEmployeeBankDetails('');
        setErrorMessage(''); // Clear error message on cancel
    };

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
            </Breadcrumb>

            {/* Instructions Section */}
            <Alert variant="info">
                <Alert.Heading>Payslip Information</Alert.Heading>
                <p>Enter the employee details to generate the pay slip.</p>
            </Alert>

            {/* Display error message if validation fails */}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {/* Payslip Form */}
            <Form>
                {/* Employee ID */}
                <Form.Group controlId="employeeID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                        placeholder="Enter Employee ID"
                    />
                </Form.Group>
                <br></br>

                {/* Employee Name */}
                <Form.Group controlId="employeeName">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        placeholder="Enter Employee Name"
                    />
                </Form.Group>
                <br></br>

                {/* Employee Bank Details */}
                <Form.Group controlId="employeeBankDetails">
                    <Form.Label>Employee Bank Details</Form.Label>
                    <Form.Control
                        type="text"
                        value={employeeBankDetails}
                        onChange={(e) => setEmployeeBankDetails(e.target.value)}
                        placeholder="Enter Employee Bank Details"
                    />
                </Form.Group>
                <br></br>

                {/* Buttons */}
                <div className="mt-4">
                    <Button variant="primary" onClick={handleGeneratePaySlip}>
                        Generate PaySlip
                    </Button>
                    <Button variant="secondary" className="ms-2" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PaySlip;
