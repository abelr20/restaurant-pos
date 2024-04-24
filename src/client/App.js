import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/items');
        const data = await response.json();
        setItems(data); 
        console.log(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <button key={item._id}>{item.name} - {item.description}/</button>
        ))}
      </ul>
    </div>
  );
}

export default App;
