import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>Show / Hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>
        Show / Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: '3rem' }}>
        <h3>width browser</h3>
        <h2>{size} px</h2>
      </div>
    </>
  );
};

export default ShowHide;

/*
Disini cleanup dibutuhkan karena tuk menyembunyikan component show and hide terus
otomatis event listener akan terus bertambah,
sehingga modal dependecy list tidak cukup [] perlu cleanup


*/
