import React from 'react';
import './Stories.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReadableStories, getArchivedVisibilityState } from '../../store/selectors/story';
import { changeArchivedVisibility } from '../../store/actions/archive';

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

const Stories = ({ stories, isArchivedVisible, changeVisibility }) => {
  const storiesList = (stories || []).map(story => <Story key={story.objectID} story={story} columns={COLUMNS} />);

  return (
    <div className="stories">
      <StoryHeaders columns={COLUMNS} />
      {storiesList}
      <p>Flag: {isArchivedVisible ? 'Visible' : 'Hidden'}</p>

      <button onClick={() => changeVisibility(isArchivedVisible)}>Change Visibility</button>
    </div>
  );
};

const mapStateToProps = state => ({
  stories: getReadableStories(state),
  isArchivedVisible: getArchivedVisibilityState(state)
});

// const mapDispatchToProps = dispatch => ({
//   changeVisibility: isVisible => dispatch(changeArchivedVisibility(isVisible))
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeVisibility: isVis => changeArchivedVisibility(isVis)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
