import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');

  const changeText = () => {
    if (text === 'random title') {
      setText('Hello Wiwa');
    } else {
      setText('random title');
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={changeText}>
        Change Text
      </button>
    </>
  );
};

export default UseStateBasics;

/*
useState is function 

example :
const [text, setText] = useState('random title');

** Remember
here text is for "value", setText is for "function for control value (update)"
useState('random title') is "value from text", whatever value boolean, obj,etc


Maksudnya adalah jika text sama dgn random title, update ke hello wiwa,
tapi jika text yg sudah diupdate hello wiwa tidak sama dgn random title masuk ke else
update kembali random title, dst... 

if (text === 'random title') {
      setText('Hello Wiwa');
    } else {
      setText('random title');
}

Sehingga stiap klik button akan terus berubah 

*/
