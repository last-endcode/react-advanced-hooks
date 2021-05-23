import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // empty name
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, mail);
  };
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          {/* koneksikan mnggunakan state value */}
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <button className='btn'>add person</button>
      </form>
    </article>
  );
};

export default ControlledInputs;

/*
Untuk mengkoneksikan input dengan form diperlukan 
useState, dan dalam input value juga diperlukan 
useState value tsb, dan onChange agar bisa terkoneksi yang koneksi tsb dan di passing by reference pada function handleSubmit sehingga menghasilkan hasil yang diketik

const [name, setName] = useState('');

 <input
  type='text'
  name='name'
  id='name'
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

value nya adalah useSate value
onChange use event obj, dan setName merujuk pada event obj
target .value 

otomatis ketika dicetak dalam handleSubmit menghasilkan
hasil yang diketikan tsb

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, mail);
  };

*/
