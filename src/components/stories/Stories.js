import React from 'react';
import './Stories.scss';

import { connect } from 'react-redux';
import { getReadableStories } from '../../store/selectors/story';

import Story from './Story';
import StoryHeaders from './StoryHeader';

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
    label: 'Archive',
    width: '10%'
  }
};

const Stories = ({ stories, onArchive }) => {
  const storiesList = (stories || []).map(story => (
    <Story key={story.objectID} story={story} columns={COLUMNS}/>
  ));

  return (
    <div className="stories">
      <StoryHeaders columns={COLUMNS} />
      {storiesList}
    </div>
  );
};

const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

export default connect(
  mapStateToProps
)(Stories);
