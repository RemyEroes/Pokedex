import React, { useState, useEffect } from 'react';
import '../css/pointer.css'; // Assurez-vous que le chemin est correct
import main_sacha from '../images/assets/main-sacha.svg';
import $ from 'jquery';

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    let lastMouseX = 0;
    let lastMouseY = 0;

    // const updateRotation = (e) => {
    //   let mouseX = e.pageX;
    //   let mouseY = e.pageY;
    //   let deplacementX = mouseX - lastMouseX;
    //   let deplacementY = mouseY - lastMouseY;
    //   let angleDeg = (deplacementX * 40) / 20;
    //   lastMouseX = mouseX;
    //   setRotation(angleDeg);
    // };
    const updateRotation = (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        let deplacementX = mouseX - lastMouseX;
        let deplacementY = mouseY - lastMouseY;
        // let angleDeg = (deplacementX * 40 + deplacementY * 40) / 20;
        let angleDeg = (deplacementX * 40 + deplacementY * 40) / 30;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        setRotation(angleDeg);
      };

  

    $(document).on('mousemove', updatePosition);
    $(document).on('mousemove', updateRotation);

    return () => {
      $(document).off('mousemove', updatePosition);
      $(document).off('mousemove', updateRotation);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`, // Utilisez des backticks pour les template strings
    zIndex: 9999,
  };

  return (
    <div style={cursorStyle} className='pointer-container'>
      <img className="pointer-image" src={main_sacha} alt="pointer" />
    </div>
  );
}

