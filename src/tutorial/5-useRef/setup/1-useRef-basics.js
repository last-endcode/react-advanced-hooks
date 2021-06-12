import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // useRef
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // jika mnggunakan current hasilnya dia target dom:
    //<input type="text" name="name" id="name">
    //jika tanpa current ,{current: input#name}
    //jika menggunakan current.value hasilnya adalah hasil input dari value tsb misal: wiwa
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    // refContainer.current.focus();
  });

  console.log('render');
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' id='name' ref={refContainer} />
        <button type='submit'>click here</button>
      </form>
    </>
  );
};

export default UseRefBasics;
