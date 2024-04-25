import React, { useEffect, useState } from 'react';

function Summary() {
  return (
    <div className="summary">
      <div className="subtotal">
        <span>Sub: </span>
        <span>18.00</span>
      </div>
      <div className="tax">
        <span>Tax: </span>
        <span>0.54</span>
      </div>
      <div className="total">
        <span>Total: </span>
        <span>18.54</span>
      </div>
      <div className="actions">
        <button className="action-button">ADD</button>
        <button className="remove-button">DEL</button>
      </div>
    </div>
  );
}

export default Summary;