import React from 'react';
import '../assets/styles/styles.scss';

const ChildComponent = ({ text }) => {
  let a = 'Prettier setup';
  return (
    <div>
      <h2>Child component indeed! {a}</h2>
      <h4>Text prop: {text}</h4>
    </div>
  );
};

export default ChildComponent;
