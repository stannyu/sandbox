import React from 'react';

const StoryHeader = ({ column }) => {
  return <span style={{ width: column.width }}>{column.label}</span>;
};

export default StoryHeader;
