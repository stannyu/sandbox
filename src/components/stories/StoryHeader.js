import React from 'react';
import './Stories.scss';

const StoryHeaders = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map(key => (
        <span key={key} style={{ width: columns[key].width }}>
          {columns[key].label}
        </span>
      ))}
    </div>
  );
};

export default StoryHeaders;
