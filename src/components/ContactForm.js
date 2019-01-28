import React, { Component } from 'react';
import { Container, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../styles/ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      first,
      last,
      email,
      message
    } = this.state;
    return (
      <Container
        id="Contact-Form"
        className="clearfix my-5"
      >
        <CardBody className="Card-Body">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="FirstName">First Name:</Label>
              <Input
                onChange={this.handleChange}
                id="FirstName"
                type="text"
                name="first"
                value={first}
                placeholder="Enter your first name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="LastName">Last Name:</Label>
              <Input
                onChange={this.handleChange}
                id="LastName"
                type="text"
                name="last"
                value={last}
                placeholder="Enter your last name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email:</Label>
              <Input
                onChange={this.handleChange}
                id="Email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Message">Message:</Label>
              <Input
                onChange={this.handleChange}
                id="Message"
                type="textarea"
                name="message"
                value={message}
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
        </CardBody>
      </Container>
    );
  }
}

export default ContactForm;