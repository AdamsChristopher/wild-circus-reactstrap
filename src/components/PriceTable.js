import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

import '../styles/PriceTable.css';

const PriceTable = () => {
  return (
    <Container
      id="Price-Table"
      className="my-5"
    >
      <Row>
        <Col
          xs="12"
        >
          <Table
            className="mx-auto"
            responsive
          >
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Weekdays excluding Wenesdays</th>
                <th className="text-center">Weekends and Wenesdays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center">Adults</th>
                <td className="text-center">$25</td>
                <td className="text-center">$20</td>
              </tr>
              <tr>
                <th className="text-center">Children under 12</th>
                <td className="text-center">$10</td>
                <td className="text-center">Free</td>
              </tr>
              <tr>
                <th className="text-center">Groups of 10 or more</th>
                <td className="text-center">$20</td>
                <td className="text-center">$15</td>
              </tr>
              <tr>
                <th className="text-center">Schools</th>
                <td className="text-center">$10</td>
                <td className="text-center">$5</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default PriceTable;