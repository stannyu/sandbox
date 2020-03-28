import React, { useEffect } from 'react';

const ChildComponent = ({ text }) => {
  let a = 'Prettier setup';
  useEffect(() => {
    console.log('Mounted');
    new Promise((res, rej) => {
      const obj = {msg: 'error occured'};
      rej(obj);
      // throw new Error(obj)
    }).then(data =>
      console.warn(data)
    ).catch(err => {
      let stringiError1 = err.toString();
      let stringiError = JSON.stringify(err);
      console.log( stringiError, '!!!', stringiError1);
    });
  });
  return (
    <div>
      <h2>Child component indeed! {a}</h2>
      <h4>Text prop: {text}</h4>
    </div>
  );
};

export default ChildComponent;
