import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const EntityComponent = () => {
  let match = useRouteMatch();
  return (
    <div>
      <p>ID: {match.params.id}</p>
    </div>
  );
};

export default EntityComponent;
