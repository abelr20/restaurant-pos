import React, { useEffect, useState } from 'react';

function Item({ itemName, addToTicket }) {
  return (
    <button className="item-button" onClick={() => addToTicket(itemName)}>{itemName}</button>
  );
}

export default Item;