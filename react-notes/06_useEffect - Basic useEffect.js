import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('after render');
    document.title = `New Messages (${value})`;
  });

  console.log('render component');

  return (
    <>
      <h2>{value}</h2>
      <button className='btn' type='button' onClick={() => setValue(value + 1)}>
        add value
      </button>
    </>
  );
};

export default UseEffectBasics;

/*
useEffect dia akan running sesudah render component


*/
