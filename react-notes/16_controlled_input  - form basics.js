import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
  };
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <button className='btn'>add person</button>
      </form>
    </article>
  );
};

export default ControlledInputs;

/*
Disini kamu bisa menyimpan submit di form 
menggunakan onSubmit={handleSubmit} 

Atau bisa juga hanya menggunakan onClick={handleSubmit}
pada button,

Dan jangan lupa handleSubmit = (e) =>
membutuhkan e.preventDefault() karena web browser 
selalu merefresh halaman oleh krna itu dibutuhkan lah 
e.preventDefault(); dan e disini adalah menampilkan obj itu sndiri.

*/
