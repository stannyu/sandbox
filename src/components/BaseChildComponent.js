import React from 'react';

const BaseChildComponent = props => {
  return (
    <div>
      <p>
        Simple child component text is here!!!
        <br /> {props.text}
      </p>
    </div>
  );
};

export default BaseChildComponent;
