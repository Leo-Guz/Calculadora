import React from 'react';
import '../styles/BtnOperation.css';

function BtnOperation(props) {
  return (
    <div
      className = 'btn-operation'
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default BtnOperation;