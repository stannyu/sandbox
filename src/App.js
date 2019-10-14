import React from 'react';
import Stories from './components/stories/Stories';

import './assets/styles/styles.scss';

const App = ({stories}) => {
  return (
    <div className='app'>
      <Stories stories={stories} />
    </div>
  );
};

export default App;
