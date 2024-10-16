import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '500px' , height: '400px'}} className="bg-dark text-light shadow-lg">
        <Card.Body>
          <h1 className="text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              name="username"
              value={user.username}
              onChange={handleInput}
              placeholder="Username"
              className="bg-secondary text-light mb-3"
            />
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Email"
              className="bg-secondary text-light mb-3"
            />
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Password"
              className="bg-secondary text-light mb-3"
            />
            <Form.Control
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              placeholder="Phone No"
              className="bg-secondary text-light mb-3"
            />
            <Button variant="outline-primary" type="submit" className="w-100">
              Register
            </Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
