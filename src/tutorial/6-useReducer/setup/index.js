import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function this is for manipulate state
// state is before update
// action what try does now
const reducer = (state, action) => {
  // disini dia wajib memiliki return state
  //jika tidak akan memperoleh big fat error
  console.log(state);
  if (action.type === 'ADD_ITEM') {
    // update newPerson , [] because array and so update array
    const newPerson = [...state.people, action.payload];

    // disini kembalikan obj before update, lalu update
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: 'Hello dhan by code!',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Add text!',
    };
  }

  // ini digunakan agar jika ada error yg tidak sama
  throw new Error('error matching action type!');
};

// this obj for state value
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  // reducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if true
    if (name) {
      // here grab new id, name
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
      // empty name after field
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  return (
    <>
      {/* if true will show modal */}
      {/* add props modalContent for <Modal/> */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
        {state.people.map((person) => {
          return <h4 key={person.id}>{person.name}</h4>;
        })}
      </div>
    </>
  );
};

export default Index;
