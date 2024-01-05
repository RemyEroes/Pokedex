import React, { useState, useEffect } from 'react';
import '../css/pointer.css'; 
import main_sacha from '../images/assets/main-sacha.svg';
import main_sacha_hover from '../images/assets/main-sacha-hover.svg';
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

  
    const updateRotation = (e) => {
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        let deplacementX = mouseX - lastMouseX;
        let deplacementY = mouseY - lastMouseY;
        let angleDeg = (deplacementX * 40 + deplacementY * 40) / 20;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        setRotation(angleDeg);
      };
    
      const handleMouseLeave = () => {
        setPosition({ x: -100, y: -100 });  
      };
    
      const updateSVG = (value) => {
        let pointer = $('.pointer-image');
        if (pointer) {
            if (value === 'hover') {
              pointer.src = main_sacha_hover;
              pointer.css('transform', 'translate(0px, 0px) scale(0.5)');
            } else if (value === 'normal') {
              pointer.src = main_sacha;
              pointer.css('transform', 'translate(-4px, 14px) scale(1)');
            }
        }
    }

  
      $(document).on('mouseenter', 'input, label img, select', function () {
        updateSVG('hover');
      });
      $(document).on('mouseleave', 'input, label img, select', function () {
        updateSVG('normal');
    });
    $(document).on('mousemove', updatePosition);
    $(document).on('mousemove', updateRotation);
    $(window).on('mouseleave', handleMouseLeave);

    return () => {
      $(document).off('mouseenter', 'input, label img, select', function () {
        updateSVG('hover');
      });
      $(document).off('mouseleave', 'input, label img, select', function () {
        updateSVG('normal');
      });
      $(document).off('mousemove', updatePosition);
      $(document).off('mousemove', updateRotation);
      $(window).off('mouseleave', handleMouseLeave);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: `translate(-50%, -50%) rotate(${rotation}deg)`, 
    zIndex: 9999,
  };

  return (
    <div style={cursorStyle} className='pointer-container'>
      <img className="pointer-image" src={main_sacha} alt="pointer" />
    </div>
  );
}

