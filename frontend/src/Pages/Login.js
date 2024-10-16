import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login() {
  return (
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
      <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>
  </Form>
  )
}

export default Login
