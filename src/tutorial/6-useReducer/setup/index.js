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
      modalContent: 'Your added text',
    };
  }

  // NO_VALUE without input...
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Add text!',
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const removePerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: removePerson,
      isModalOpen: true,
      modalContent: 'Your Remove Item',
    };
  }

  // for error action.type not equal
  throw new Error('error matching action type!');
};

// this obj, for state value
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  // this for input name
  const [name, setName] = useState('');
  // reducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if true
    if (name) {
      // here grab new id, name input
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPerson });
      // empty name after field input
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  // for closeModal notif
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {/* if true will show modal */}
      {/* add props modalContent for <Modal/> */}
      {/* add props closeModal for closeModal */}
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
          return (
            <>
              <div className='item'>
                <h4>{person.name}</h4>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: person.id })
                  }
                >
                  remove item
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Index;
