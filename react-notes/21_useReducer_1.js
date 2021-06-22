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
  if (action.type === 'TESTING') {
    // update
    // disini kembalikan obj before update, lalu update
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'Hello dhan by code!',
    };
  }
  // return state;

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
      dispatch({ type: 'TESTING' });
    } else {
      dispatch({ type: 'ERROR' });
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


/*
console.log(state, action);
return state;

dia akan menampilkan state before update, dan action dari dispatch
{
    "people": [],
    "isModalOpen": false,
    "modalContent": ""
}

{
    "type": "TESTING"
}

jika tanpa return state maka akan menghasilkan big fat error!


*/