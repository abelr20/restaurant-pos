import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [current, setCurrent] = useState('X');
  return (
    <>
      <div>
        <h1>Menu</h1>
        {row1}
      </div>
      <div>
        {row2}
      </div>
      <div>
        {row3}
      </div>
    </>
  );
};

const Box = (props) => {
  const [text, setText] = useState('-');
  const [done, setDone] = useState(false);

  const clickHandler = () => {
    if (!done) {
      console.log('Before set: ' + props.current);
      if (props.current === 'X') {
        props.setCurrent('O');
      } else {
        props.setCurrent('X');
      }
      setText(props.current);
      console.log('After set: ' + props.current);
      setDone(true);
    }

    const array = props.board;
    array[props.id] = props.current;
    console.log('Board: ' + array);
    props.setBoard(array);
    console.log('Board: ' + array);
  
    if (props.board[0] === props.board[1] && props.board[1] === props.board[2] && props.board[0] !== '-') console.log(props.current + ' WINS!');
    
  };
    
  return (
    <button id={props.id} onClick={clickHandler}>{text}</button>
  );
};


const root = createRoot(document.querySelector('#root'));
root.render(<App />,);