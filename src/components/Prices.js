import React from 'react';

import PriceTable from './PriceTable';

import '../styles/Prices.css';

const Prices = () => {
  return (
    <div
      id="Prices"
      className="mt-4"
    >
      <h2 className="text-center">Prices</h2>
      <PriceTable />
    </div>
  )
}

export default Prices;