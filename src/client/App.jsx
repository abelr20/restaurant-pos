import React, { useEffect, useState } from 'react';

import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
