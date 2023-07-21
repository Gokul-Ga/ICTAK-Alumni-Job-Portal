import React from 'react'
import { Form, Button, Container, Row,Col} from "react-bootstrap";
import FooterUser from './FooterUser';
import SignupNavbarUser from './SignupNavbarUser';
const SignupUser = () => {
  return (
    <div className='userlogin-signup'>
      <SignupNavbarUser/>
        <Container className="mt-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="text-center my-4">Register</h1>
            <Form >
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  required
                  minLength={4}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Form.Group>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                />
              </Form.Group>

                <Form.Group controlId="highestQualification">
                  <Form.Label>Highest Qualification</Form.Label>
                  <Form.Control
                    as="select"
                    name="highestQualification"
                    required
                  >
                    <option value="None">None</option>
                    <option value="High School">High School</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="courseStudied">
                  <Form.Label>Course studied at ICTAK</Form.Label>
                  <Form.Control
                    as="select"
                    name="courseStudied"
                    required
                  >
                    <option value="None">None</option>
                    <option value="FSD">FSD</option>
                    <option value="DSA">DSA</option>
                    <option value="ML-AI">ML-AI</option>
                    <option value="RPA">RPA</option>
                    <option value="ST">ST</option>
                    <option value="CSA">CSA</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="batchDetails">
                  <Form.Label>Batch details</Form.Label>
                  <Form.Control
                    as="select"
                    name="batchDetails"
                    required
                  >
                    <option value="None">None</option>
                    <option value="KKEM">KKEM</option>
                    <option value="NORKA">NORKA</option>
                    <option value="KDISC">KDISC</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="placementStatus">
                  <Form.Label>Placement Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="placementStatus"
                    required
                  >
                    <option value="None">None</option>
                    <option value="Placed">Placed</option>
                    <option value="Job-Seeking">Job-Seeking</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                  />
                </Form.Group>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "14vh" }}
              >
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterUser/>
    </div>
  )
}

export default SignupUser;