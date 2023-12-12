import React, { useContext, useEffect, useRef } from 'react';
import '../css/closeButton.css';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';


// close img
import close_img from '../images/assets/close.svg'


export default function CloseButton() {


  const { openCardValue, closingCardValueFunction } = useContext(OpenCardContext);

  function closeCardOnClick() {
    closingCardValueFunction()

  }


  // close/open
  const close_button = useRef(null)
  useEffect(() => {
    const Button_element = close_button.current;
    // eslint-disable-next-line eqeqeq
    if (openCardValue == 'close') {
      $(Button_element).css('display', 'none')
    } else {
      $(Button_element).css('display', 'flex')
    }
  }, [openCardValue])



  return (
    <button ref={close_button} className="close-button">
      <img className="close-img" src={close_img} alt="close" onClick={closeCardOnClick} />
    </button>

  );
}



