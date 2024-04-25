import React, { useEffect, useState } from 'react';

import CategoryButtons from './CategoryButtons';
import ItemButtons from './ItemButtons';

function MainContent() {
  return (
    <div className="main-content">
      <CategoryButtons />
      <ItemButtons />
    </div>
  );
}

export default MainContent;