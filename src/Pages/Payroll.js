import React, { useState } from 'react';
import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ValueForm from './ValueForm';
import PaySlip from './PaySlip';

const Payroll = () => {
  // State for Payrun details
  const [payrunPeriod, setPayrunPeriod] = useState('');
  const [payrunType, setPayrunType] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');  // New state for Date of Joining
  const [workDays, setWorkDays] = useState('');  // New state for Work Days
  const [errorMessage, setErrorMessage] = useState('');

  // State for ValueForm details
  const [basicSalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState('');
  const [bonus, setBonus] = useState('');
  const [overtime, setOvertime] = useState('');
  const [pensionContributions, setPensionContributions] = useState('');
  const [welfareContributions, setWelfareContributions] = useState('');

  const handleSave = () => {
    if (!payrunPeriod || !payrunType || !dateOfJoining || !workDays) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    setErrorMessage('');
    alert("Data saved successfully.");
  };

  const handleCancel = () => {
    setPayrunPeriod('');
    setPayrunType('');
    setDateOfJoining('');
    setWorkDays('');
    setErrorMessage('');
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
            <Tab.Pane eventKey="defaultPayrun">
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
              </Breadcrumb>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Form>
                <Form.Group controlId="payrunPeriod">
                  <Form.Label>Payrun Period</Form.Label>
                  <Form.Control type="text" value={payrunPeriod} onChange={(e) => setPayrunPeriod(e.target.value)} placeholder="Enter Payrun Period" />
                </Form.Group>
                <Form.Group controlId="payrunType">
                  <Form.Label>Payrun Generating Type</Form.Label>
                  <Form.Control as="select" value={payrunType} onChange={(e) => setPayrunType(e.target.value)} >
                    <option value="">Select Type</option>
                    <option value="hourly">Hourly</option>
                    <option value="monthly">Monthly</option>
                  </Form.Control>
                </Form.Group>
                {/* New fields */}
                <Form.Group controlId="dateOfJoining">
                  <Form.Label>Date of Joining</Form.Label>
                  <Form.Control type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} placeholder="Enter Date of Joining" />
                </Form.Group>
                <Form.Group controlId="workDays">
                  <Form.Label>Work Days</Form.Label>
                  <Form.Control type="number" value={workDays} onChange={(e) => setWorkDays(e.target.value)} placeholder="Enter Work Days" />
                </Form.Group>
                <Button variant="primary" onClick={handleSave}> Save </Button>
                <Button variant="secondary" onClick={handleCancel} className="ms-2"> Cancel </Button>
              </Form>
            </Tab.Pane>

            <Tab.Pane eventKey="value">
              <ValueForm setBasicSalary={setBasicSalary} setAllowance={setAllowance} setBonus={setBonus} setOvertime={setOvertime} setPensionContributions={setPensionContributions} setWelfareContributions={setWelfareContributions} />
            </Tab.Pane>

            <Tab.Pane eventKey="payslip">
              <PaySlip 
                payrunPeriod={payrunPeriod} 
                payrunType={payrunType} 
                basicSalary={basicSalary} 
                allowance={allowance} 
                bonus={bonus} 
                overtime={overtime} 
                pensionContributions={pensionContributions} 
                welfareContributions={welfareContributions}
                dateOfJoining={dateOfJoining} 
                workDays={workDays}
              />
            </Tab.Pane>

          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
};

export default Payroll;
