import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const formStyle = { paddingLeft: '15%', paddingRight: '15%' }
const buttonStyle = { background: '#FBA858', border: 'none' }

class ContactForm extends React.Component {
  render() {
    return (
      <Container
        className="clearfix mt-4"
        style={formStyle}
      >
        <Form id="Contact-Form">
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
            <Label for="FirstName">Last Name:</Label>
            <Input
              id="LastName"
              type="text"
              name="text"
              placeholder="Enter your last name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Email:</Label>
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
            id="Piece-Of-Shit-Button"
            className="float-right"
            style={buttonStyle}
          >
            Send
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;