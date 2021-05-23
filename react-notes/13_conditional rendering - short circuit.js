import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [coba, setCoba] = useState('dhan code');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <div>{text || 'john doe'}</div>
      <div>{coba && 'peter doe'}</div>
    </>
  );
};

export default ShortCircuit;

/*
Shortcircuit


|| 
Jika text empty string otomatis yang tampil adalah john doe

const [text, setText] = useState('');
return <>{text || 'john doe'}</>; //john doe

****************
Tapi jika text state true boolean akan tampil(kosong),
kalo disi nama seperti 'peter doe' in state value
akan tampil peter doe krna text state nya true.

const [text, setText] = useState('peter doe');
return <>{text || 'john doe'}</>; //peter doe

*jadi || ini jika benar yg prtama maka yg prtama print,
jika yg prtama false, yang sebelah kanan print

****************

&&
Jika empty maka kosong, 
const [coba, setCoba] = useState('');
return <> <div>{coba && 'peter doe'}</div></> //kosong

Jika bersifat true 
const [coba, setCoba] = useState(true);
return <> <div>{coba && 'peter doe'}</div></> //peter doe

const [coba, setCoba] = useState('dhan code');
return <> <div>{coba && 'peter doe'}</div></> //peter doe

*jadi && ini jika benar yg state awal maka yg disebelah kanan di execution,
jika yg state awal salah maka kosong






|| jika state awal empty string, atau bisa juga false, otomatis yg kedua yang akan diprint.
Sebaliknya jika state awal not empty string, atau true otomatis yg awal diprint 
yg kedua tidak.

&& jika yg awal true, maka yg akan mengembalikan yg kedua, dan yg kedua akan di print.
Tapi jika yg awal false , maka akan print yg false


*/
