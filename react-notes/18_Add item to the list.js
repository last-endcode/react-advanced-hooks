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
  // add empty string tuk mnjdi nilai penampung
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if true
    if (name && mail) {
      // masukan id baru, dan name, mail yg diketik ke people jika key match akan disimpan ke nilai
      const people = { id: new Date().getTime().toString(), name, mail };
      console.log(people);
      // update to empty array
      // oldPerson is current person empty, and will update by people
      setPerson((oldPerson) => {
        return [...oldPerson, people];
      });
      setName('');
      setMail('');
    } else {
      console.log('empty string');
    }
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
      {person.map((item) => {
        const { id, name, mail } = item;
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <p>{mail}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;

/*


*/
