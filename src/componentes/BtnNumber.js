import React from 'react';
import '../styles/BtnNumber.css';

function BtnNumber(props) {
  return (
    <div
      className = 'btn-number'
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default BtnNumber;