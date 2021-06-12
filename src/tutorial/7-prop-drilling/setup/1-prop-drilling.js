import React, { useState, useContext } from 'react';
import { data } from '../../../data';

const myContext = React.createContext();

function PropsDrilling() {
  const [person, setPerson] = useState(data);

  const removeItem = (id) => {
    setPerson((person) => {
      return person.filter((person) => person.id !== id);
    });
  };
  return (
    <div>
      <myContext.Provider value={{ person, removeItem }}>
        <List />
      </myContext.Provider>
    </div>
  );
}

const List = () => {
  const mainData = useContext(myContext);
  return (
    <>
      {mainData.person.map((people) => {
        return <SinglePerson key={people.id} {...people} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removeItem } = useContext(myContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove item</button>
    </div>
  );
};

export default PropsDrilling;
