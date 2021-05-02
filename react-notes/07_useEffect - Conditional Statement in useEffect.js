import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
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
useEffect dia akan running sesudah render component

dan selalu ingat rules Hooks, 
kamu tidak bisa menyimpan conditional statement yg didalamnya memiliki hooks.

  useEffect(() => {
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  });

Contoh diatas benar karena conditional statement didalam hooks,
artinya jika value lebih besar sama dgn 1 nilai document.title akan bertambah (ditampilkan), jika tidak alias (0)
tidak akan ditampilkan 

*/
