import React from 'react';

// close img
import close_img from '../images/assets/close.svg'


export default function CloseButton() {

  return (
    <button  className="close-button">
      <img className="close-img" src={close_img} alt="close" />
    </button>

  );
}



