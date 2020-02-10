import React from 'react';

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
