import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  // reference func
  const checkSize = () => {
    // update here new width
    setSize(window.innerWidth);
  };

  // useEffect(() => {
  //   // add callback func here
  //   console.log('useEffect call');
  //   window.addEventListener('resize', checkSize);
  //   return () => {
  //     console.log('clean up');
  //     window.removeEventListener('resize', checkSize);
  //   };
  // });

  // useEffect(() => {
  //   window.addEventListener('resize', checkSize);
  // }, []);

  console.log('component render');
  return (
    <>
      <h1>window size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

/*
useEffect cleanup 

Disini inner.width adalah untuk mengetahui ukuran lebar pada browser.
Dalam useEffect kita menerapkan callback func 
Hanya saja jika kita menggunakan teknik ini tanpa cleanup 
Otomatis event listener dlm inspect resize akan terus menumpuk dan lebih banyak memakan memori.

useEffect(() => {
    window.addEventListener('resize', checkSize);
});

Solusinya adalah cleanup sehingga mau kita ubah resize browsernya 
eventListener tsb tidak akan prnah menumpuk dan tetap 1, karena setiap ingin menjalankan
useEffect kita terlebih dahulu akan mencleanup nya terlebih dahulu.
Jadi render component jalan dulu, lalu clean up dijalankan kemudian baru useEffect dijalankan

useEffect(() => {
  window.addEventListener('resize', checkSize);
  return () => {
      window.removeEventListener('resize', checkSize);
    };
});

atau bisa juga menggunakan dependency list []


useEffect(() => {
  window.addEventListener('resize', checkSize);
 },[]);

Sehingga penggunaan useEffect tidak akan update tuk eventListener krna sudah mnggunakan empty list []
Jadi hasil update tsb sudah diperoleh useState, jika tanpa [], otomatis update terus event listenernya

Kenapa tidak menggunakan useState saja?
Karena jika hanya seperti :

window.addEventListener sja tanpa useEffect event tetap akan update 
sehingga useEffect dibutuhkan tapi perlu menggunakan [], jika tanpa [] akan trus update!

*/
