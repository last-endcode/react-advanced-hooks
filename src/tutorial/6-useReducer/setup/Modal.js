import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  // add useEffect and use setTimeout 3000 for close

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
