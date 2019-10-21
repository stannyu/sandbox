import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const EntityComponent = () => {
  let match = useRouteMatch();
  const showNestedParamsData = () => console.log(match);
  return (
    <div>
      <p onClick={showNestedParamsData}>ID: {match.params.id}</p>
    </div>
  );
};

export default EntityComponent;
