import React, { useState, useEffect } from 'react';
import '../css/pointer.css'; // Assurez-vous que le chemin est correct
import main_sacha from '../images/assets/main-sacha.svg';
import $ from 'jquery';

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    $(document).on('mousemove', updatePosition);

    return () => {
      $(document).off('mousemove', updatePosition);
    };
  }, []); // useEffect ne déclenchera cet effet qu'une seule fois lors du montage du composant

  const cursorStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  };

  return (
    <div style={cursorStyle} className='pointer-container'>
      <img className="pointer-image" src={main_sacha} alt="pointer" />
    </div>
  );
}


