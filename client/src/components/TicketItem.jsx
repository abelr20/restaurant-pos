import React from 'react';

function TicketItem({ count, itemName, price }) {
  return (
    <div className='ticket-item'>
      <span className='item-count'>{count} </span>
      <span className='item-name'>{itemName} </span>
      <span className='item-price'>${price}</span>
    </div>
  );
}

export default TicketItem;
