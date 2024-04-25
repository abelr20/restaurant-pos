import React, { useEffect, useState } from 'react';

import CategoryButtons from './CategoryButtons';
import ItemButtons from './ItemButtons';

function MainContent({ items, addToTicket }) {
  return (
    <div className="main-content">
      <CategoryButtons items={items}/>
      <ItemButtons items={items} addToTicket={addToTicket}/>
    </div>
  );
}

export default MainContent;