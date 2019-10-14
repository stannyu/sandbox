import React from 'react';
import './Stories.scss';

import Story from './Story';
import StoryHeader from './StoryHeader';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
};

const Stories = ({ stories }) => {
  const storiesListHeaders = (
    <div className="stories-header">
      {Object.keys(COLUMNS).map(key => (
        <StoryHeader key={key} column={COLUMNS[key]} />
      ))}
    </div>
  );
  const storiesList = (stories || []).map(story => <Story key={story.objectID} story={story} columns={COLUMNS} />);
  return (
    <div className="stories">
      {storiesListHeaders}
      {storiesList}
    </div>
  );
};

export default Stories;
