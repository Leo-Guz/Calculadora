import React from 'react';
import '../styles/BtnEffect.css';

function BtnEffect(props) {
  return (
    <div
      className = 'btn-effect'
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default BtnEffect;