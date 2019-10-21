import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import PageOneComponent from './PageOneComponent';
import PageTwoComponent from './PageTwoComponent';

const App = () => {
  return (
    <div>
      <p>Rooot component</p>
      <Router>
        <NavBar/>
        <Route path='/page1' component={PageOneComponent}/>
        <Route path='/page2' component={PageTwoComponent}/>
      </Router>
      {/*<PageOneComponent></PageOneComponent>*/}
    </div>
  );
};

export default App;
