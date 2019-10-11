import React from 'react';
import BaseChildComponent from './components/BaseChildComponent';

const App = () => {
  return (
    <div>
      <div>Rooot component</div>
      <dl>
        <dt>Title</dt>
        <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Title</dt>
        <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Title</dt>
        <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Title</dt>
        <dd>Lorem ipsum dolor sit amet.</dd>
        <dt>Title</dt>
        <dd>Lorem ipsum dolor sit amet.</dd>
      </dl>
      <BaseChildComponent text='Why so serious?'></BaseChildComponent>
    </div>
  );
};

export default App;
