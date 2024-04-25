import React, { useEffect, useState } from 'react';

import Item from './Item';

function ItemButtons({ items, addToTicket }) {
  
  return (
    <div className="item-buttons">
      {items.map(item => (
        <Item key={item._id} itemName={item.name} addToTicket={addToTicket}></Item>
      ))}
    </div>
  );
}


export default ItemButtons;