import React from 'react';
import { Route, useRouteMatch, Link } from 'react-router-dom';
import SubrouteComponent from './SubrouteComponent';

const PageOneComponent = props => {
  let match = useRouteMatch();

  const printMatch = () => console.log(match, props);

  return (
    <div>
       - <Link to={`${match.url}/another`}>Just a lint to subroute</Link>
      <br/>
       - <Link to='/'>Home</Link>
      <p>PageOneComponent!!</p>

      <Route path={`${match.path}/another`} component={SubrouteComponent} />
      <button onClick={printMatch}>Print Match</button>
    </div>
  );
};

export default PageOneComponent;
