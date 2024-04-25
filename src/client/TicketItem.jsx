import React, { useEffect, useState } from 'react';

function TicketItem({ count, itemName, price }) {
  return (
    <div className="ticket-item">
      <span className="item-count">{count} </span>
      <span className="item-name">{itemName} </span>
      <span className="item-price">${price}</span>
      {/* <ul className="modifiers">
        {modifiers.map((modifier, index) => (
          <li key={index}>{modifier}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TicketItem;