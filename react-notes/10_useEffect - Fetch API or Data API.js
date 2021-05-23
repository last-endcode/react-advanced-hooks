import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // async await
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // update data with obj
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt='' />
              <div>
                <h4>{login}</h4>
                <a href={avatar_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

/*
HTMLCSS

tampilkan akan dibagi menjadi 3 atau menyesuaikan with auto-fit

.users {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
}

users li parents dibuat flex sehigga div children menjadi kesamping

.users li {
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-radius: var(--radius);
  text-align: left;
}


ReactJS

penggunaan useEffect dibuat untuk menyimpan func reference dari func getUser()
yang memiliki async await tuk mengambil nilai json dari api,
dan penggunaan dependency list dari useEffect agar useEffect tidak mengupdate
data json dari api secara terus menerus sehingga diperlukan [] dalam useEffect

*/
