import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(false);

  return (
    <>
      <div>
        <button
          style={{ marginBottom: '1rem' }}
          className='btn'
          onClick={() => setText(!text)}
        >
          Click Here
        </button>
        {text && <h2>Error</h2>}
        {text ? <p>is an error</p> : <h3>without error</h3>}
      </div>
    </>
  );
};

export default ShortCircuit;

/*
Ternary Operator

const [text, setText] = useState(false);

   <button
          style={{ marginBottom: '1rem' }}
          className='btn'
          onClick={() => setText(!text)}
   >
          Click Here
   </button>
  {text && <h2>Error</h2>}
  {text ? <p>is an error</p> : <h3>without error</h3>}

  dalam and dia akan menghasilkan Error karena dalam onClick
  !text artinya kebalikan dari state value false adalah true 
  Sehingga <h2>Error</h2> akan ditampilkan karena && jika bersifat true,
  otomatis akan di print yg kedua.
  Dan ternary text ? true : false 
  Untuk default without error akan tampil krna false,
  Tapi ketika di klik p is an error akan true krna bersifat true dri onClick

*/
