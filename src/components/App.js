import React from "react";
import AnotherComponent from "./AnotherComponent";
import ChildComponent from './ChildComponent';

const App = () => {
  console.log("Hell ya!")
  return <>
    <div>Root component</div>
    <h1>Hi there</h1>  
    <AnotherComponent />
    <ChildComponent text={'Outer Space'}/>
  </>;
};

export default App;
