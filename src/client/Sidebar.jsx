import React, { useEffect, useState } from 'react';

import Ticket from './Ticket';
import Summary from './Summary';

function Sidebar() {
  return (
    <div className="sidebar">
      <Ticket />
      <Summary />
    </div>
  );
}

export default Sidebar;