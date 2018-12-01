import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/ContactForm.css';

class ContactForm extends React.Component {
  render() {
    return (
      <Container
        id="Contact-Form"
        className="clearfix mt-4"
      >
        <Form>
          <FormGroup>
            <Label for="FirstName">First Name:</Label>
            <Input
              id="FirstName"
              type="text"
              name="text"
              placeholder="Enter your first name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">Last Name:</Label>
            <Input
              id="LastName"
              type="text"
              name="text"
              placeholder="Enter your last name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email:</Label>
            <Input
              id="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Message">Message:</Label>
            <Input
              id="Message"
              type="textarea"
              name="text"
              placeholder="Enter your message here"
            />
          </FormGroup>
          <Button
            id="Button"
            className="float-right"
          >
            Send
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;