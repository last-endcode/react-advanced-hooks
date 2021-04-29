import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  // removeItem
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    // jadi ketika false dia akan [], nah empty ini update
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className='item' key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)}>remove item</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear All
      </button>
      <button className='btn' onClick={() => setPeople(data)}>
        refresh All
      </button>
    </>
  );
};

export default UseStateArray;

/*
Disini kita membuat useState dgn value nya adalah obj array dalam data.
dan mengambil semua list dalam data original array menggunakan array map 
dan ketika button diklik otomatis semua object akan menghilang.

Kenapa ?
Karena kita mengupdate nya menggunakan setPeople dengan empty array []

Dan untuk refresh all atau kembali ke default setPeople mengarah pada data or obj array tsb.

Dan untuk menghapus setiap individu array bisa menggunakan filter
ingat filter digunakan untuk mengubah original array 
dan disitu setiap id yg tidak sama cth id:1 !== 1 artinya false otomatis akan [] empty obj
dan empty obj tsb untuk menghapus obj secara individu yg diupdate oleh setPeople

*/
