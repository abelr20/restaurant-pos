import React, { useEffect, useState } from 'react';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';

function App() {
  const [items, setItems] = useState([]); 
  const [tickets, setTickets] = useState([]); 

  const addToTicket = (name, price = 0) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === name) {
        price = items[i].price;
        break;
      }
    }
    const newItem = {
      name: name,
      price: price
    };
    setTickets([...tickets, newItem]);
  };

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
  return (
    <div className="container">
      <Sidebar items={items} tickets={tickets}/>
      <MainContent items={items} tickets={tickets} addToTicket={addToTicket}/>
    </div>
  );
}

export default App;
