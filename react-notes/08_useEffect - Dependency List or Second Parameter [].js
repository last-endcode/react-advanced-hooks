import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      console.log('call useEffect');
      document.title = `New Messages(${value})`;
    }
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
useEffect dependecy list

Jika useEffect menggunakan dependecy list or second parameter [] empty list

  useEffect(() => {
    if (value >= 1) {
      console.log('call useEffect');
      document.title = `New Messages(${value})`;
    }
  },[]);

Otomatis disini dia hanya menjalankan render saja, tapi
Jika di isi dgn value [value] otomatis dia akan menjalankan useEffect dan mengupdate value

  useEffect(() => {
    if (value >= 1) {
      console.log('call useEffect');
      document.title = `New Messages(${value})`;
    }
  },[value]);

Dan jika tanpa dependency list dia akan otomatis menjalankan useEffect stlah render component

*/
