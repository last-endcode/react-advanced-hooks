import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [user, setUser] = useState('default user');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        const { login } = data;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;

/*
Multiple returns

Jika return pertama benar otomatis yang dirunning adalah yg return prtama,
jika tidak return kedua yang dirunning. 

Disini kita menggunakan fetch simple
Pointnya adalah :

Jika fetch url benar tampilkan, jika tidak maka akan muncul error.


*/
