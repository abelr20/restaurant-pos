import React from 'react';

function Summary({ tickets = [] }) {
  let zero = 0;
  let sub = 0;
  let tax = 0;
  let total = 0;

  for (let i = 0; i < tickets.length; i++) {
    sub += tickets[i].price;
    tax = sub * 0.08;
    total = sub * 1.08;
  }

  return (
    <div className='summary'>
      <div className='subtotal'>
        <span>Sub: </span>
        <span>{sub.toFixed(2)}</span>
      </div>
      <div className='tax'>
        <span>Tax: </span>
        <span>{tax.toFixed(2)}</span>
      </div>
      <div className='total'>
        <span>Total: </span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className='actions'>
        <button className='action-button'>ADD</button>
        <button className='remove-button'>DEL</button>
      </div>
    </div>
  );
}

export default Summary;
