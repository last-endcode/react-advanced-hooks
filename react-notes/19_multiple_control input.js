import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // create multiple state
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    // oke disini target.name dia merujuk pada input:name
    //dan target.value merujuk pada value pertama ktika diketik
    const name = e.target.name;
    const value = e.target.value;
    // update salin obj, lalu update
    //[name]: value sama dgn firstName : value but
    // untuk smua nya lbih bagus mnggunakan dynamic obj
    //[name] merujuk pada key firstName, email, dan age
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      // create newPerson,  salin obj person, dan tambahkan id
      //newPerson ini dia hasil dari ketikan yaa.. yg dari onChange
      const newPerson = { ...person, id: new Date().getTime().toString() };
      //update empty array people
      setPeople([...people, newPerson]);
      // clear state value
      setPerson({ firstName: '', email: '', age: '' });
    } else {
      console.log(`empty string...`);
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
