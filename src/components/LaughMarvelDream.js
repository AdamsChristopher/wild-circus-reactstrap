import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/LaughMarvelDream.css';

const LaughMarvelDream = () => {
  return (
    <Container
      id="Laugh-Marvel-Dream"
      className="my-4"
    >
      <Row>
        <Col
          xs="12"
          md="4"
        >
          <h4 className="text-center">Laugh</h4>
          <p>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
        </Col>
        <Col
          xs="12"
          md="4"
        >
          <h4 className="text-center">Marvel</h4>
          <p>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</p>
        </Col>
        <Col
          xs="12"
          md="4"
        >
          <h4 className="text-center">Dream</h4>
          <p>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default LaughMarvelDream;