import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'wira wardhana',
    message: 'hello...',
    age: 26,
  });

  const changeText = () => {
    setPerson({
      ...person,
      message: 'you can call me wiwa',
      age: 'im 26 years old',
    });
  };

  const changeText2 = () => {
    setCountry('Tokyo, Japan');
  };

  // multiple state value
  const [name, setName] = useState('wiwa');
  const [job, setJob] = useState('front end developer');
  const [country, setCountry] = useState('indonesia');

  return (
    <>
      {/* use object dont forget person.obj */}
      <div>
        <h3>{person.name}</h3>
        <h3>{person.message}</h3>
        <h3>{person.age}</h3>
        <button className='btn' onClick={changeText}>
          change text
        </button>
      </div>

      <br></br>
      {/* multiple state value */}
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <h4>{country}</h4>
        <button className='btn' onClick={changeText2}>
          change country
        </button>
      </div>
    </>
  );
};

export default UseStateObject;

/*
Disini kita membuat value dari state sebagai object,
Dan selalu ingat kita ingin mengupdate nya dengan setPerson, kita tidak bisa mengganti object dengan hanya menuliskan "Hello World", karena ketika diklik tidak akan tampil.

Solusi nya adalah setiap ingin update selalu menyalin obj terlebih dahulu.

const changeText = () => {
    setPerson({
      ...person,
      message: 'you can call me wiwa',
      age: 'im 26 years old',
    });
  };

  Otomatis message dan age akan berubah, ...person adalah kita menyalin obj keseluruhan
  dan messsage, dan age akan overwrite (menimpa)

  Dan diatas juga, kamu bisa membuat multiple state values, 
  sehingga lebih mudah memanage nya mana yang ingin kamu update.
  tanpa perlu menggunakan spread operator 


*/
