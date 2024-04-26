import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import Summary from './Summary';

function Sidebar({ tickets }) {
  return (
    <div className="sidebar">
      <Ticket tickets={tickets}/>
      <Summary tickets={tickets}/>
    </div>
  );
}

export default Sidebar;