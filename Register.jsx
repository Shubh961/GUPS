// RegistrationForm.js
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const Register = () => {
    // Add registration logic here
    // For simplicity, we'll just pass the name and userRole to the parent component
    onRegister({ name, userRole });
  };

  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formUserRole">
        <Form.Label>User Role</Form.Label>
        <Form.Control
          as="select"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="Executive">Executive</option>
          <option value="Bank_ADMIN">Bank_ADMIN</option>
          <option value="Agent">Agent</option>
          <option value="Telecaller">Telecaller</option>
          <option value="Super_ADMIN">Super_ADMIN</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" onClick={Register}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
