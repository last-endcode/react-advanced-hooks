import React, { useState } from 'react';

const UseStateCounter = () => {
  // for counter
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  // update delay
  const complexCounter = () => {
    setTimeout(() => {
      setCount((prevState) => {
        console.log(prevState);
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div style={{ margin: '4rem 0' }}>
        <h3>Simple Counter</h3>
        <h1 style={{ fontSize: '12rem' }}>{count}</h1>
        <button className='btn' onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>

      {/* complex counter | update with delay */}
      <div style={{ margin: '4rem 0' }}>
        <h3>Complex Counter</h3>
        <h1 style={{ fontSize: '12rem' }}>{count}</h1>
        <button className='btn' onClick={complexCounter}>
          increase
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;

/*
disini kita bisa mengupdate nilai menggunakan delay 
menggunakan setTimeout dan juga update state dengan function old value

  // update delay
  const complexCounter = () => {
    setTimeout(() => {
      setCount((prevState) => {
        console.log(prevState);
        return prevState + 1;
      });
    }, 2000);
  };

  prevState adalah argument old value before update.

*/
