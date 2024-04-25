import React, { useEffect, useState } from 'react';

import TicketItem from './TicketItem';

function Ticket() {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/items');
        const data = await response.json();
        setItems(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 
  console.log(items);
  // {items.map(item => (
  // <button key={item._id}>{item.name} - ${item.price}</button>
  // ))}
  return (
    <div className="ticket">
      {items.map(item => (
        <TicketItem key={item._id} count={1} itemName={item.name} price={item.price}/>
      ))}
      {/* <TicketItem count={2} itemName={"Apples"} price={10.00} modifiers={['Honeycrisp', '2x Add Sugar', 'No Stem']} />
      <TicketItem count={1} itemName="Oranges" price={5.00} modifiers={['Tangerine', 'Add Sugar', 'No Stem']} /> */}
    </div>
  );
}

export default Ticket;