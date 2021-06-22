import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if true
    if (name) {
      setShowModal(true);
      // update
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('');
    }
  };
  return (
    <>
      {/* if true will show modal */}
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='submit'>add</button>
      </form>

      <div>
        {people.map((person) => {
          return <h4 key={person.id}>{person.name}</h4>;
        })}
      </div>
    </>
  );
};

export default Index;
