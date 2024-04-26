import React, { useEffect, useState } from 'react';
import TicketItem from './TicketItem';

function Ticket({ tickets = [] }) {
  return (
    <div className="ticket">
     {tickets.length > 0 ? (
        tickets.map(item => (
          <TicketItem key={item._id} count={1} itemName={item.name} price={item.price}/>
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default Ticket;