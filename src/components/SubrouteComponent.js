import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import EntityComponent from './EntityComponent';

const SubrouteComponent = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h2>SubrouteComponent</h2>
      <ul>
        <li>
          <Link to={`${match.url}/entity/1`}>Entity nav 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/entity/2`}>Entity nav 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/entity/3`}>Entity nav 3</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.url}/entity/:id`} component={EntityComponent} />
    </div>
  );
};

export default SubrouteComponent;
