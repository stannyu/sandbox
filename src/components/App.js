import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  return (
    <>
      <div>Root component</div>
      <ChildComponent text={'Outer Space'} />
    </>
  );
};

export default App;
