import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/Bio.css';

const Bio = () => {
  return (
    <Container
      id="Bio"
      className="my-5"
    >
      <Row>
        <Col xs="12">
          <p>Founded in 2004, the Wild Circus has traveled the world to bring to you the pinacle of entertainment. Dedicated to advancing and innovating the art form of circus, we are one of the world’s leading youth arts companies; both a celebrated producer of contemporary circus-based theatre for young people and a national centre of arts training excellence.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Bio;