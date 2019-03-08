import React from 'react';
import { Container } from 'reactstrap';

import PriceTable from './PriceTable';

import '../../styles/Prices.css';

const Prices = () => {
  return (
    <Container id="Prices">
      <h2 className="text-center">Prices</h2>
      <PriceTable />
    </Container>
  )
}

export default Prices;
