// src/ContactForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    const [username, setUsername] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        // Basic validation
        if (!username || !contactNo || !message) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }

        // Simulate an API call
        try {
            // Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log({ username, contactNo, message });
            setSuccess('Message sent successfully!');
            setUsername('');
            setContactNo('');
            setMessage('');
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '600px' }} className="bg-dark text-light shadow-lg">
                <Card.Body>
                    <h2 className="text-center">Contact Us</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                aria-describedby="usernameHelp"
                                className="bg-secondary text-light"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control
                                type="tel"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                required
                                pattern="[0-9]{10}" // Basic validation pattern
                                title="Please enter a valid 11-digit contact number."
                                className="bg-secondary text-light"
                            />
                            <Form.Text muted>
                                Enter your 11-digit contact number.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="bg-secondary text-light"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ContactForm;
