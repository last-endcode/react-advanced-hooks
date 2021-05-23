import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  // if true print, if not second return will print
  // here will print cz useState is true, but if false, multiple returns will prints
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;

/*
Multiple returns

Jika return pertama benar otomatis yang dirunning adalah yg return prtama,
jika tidak return kedua yang dirunning. 


*/
