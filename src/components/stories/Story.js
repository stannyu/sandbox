import React from 'react';
import './Story.scss';
import { doArchiveStory, doUnarchiveStory } from '../../store/actions/archive';
import { connect } from 'react-redux';
import { getArchivedVisibilityState } from '../../store/selectors/story';

const Story = ({ story, columns, onArchive, isArchivedVisible, onUnarchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;

  const dispatchArchiveAction = () => {
    isArchivedVisible
      ? onUnarchive(objectID)
      : onArchive(objectID)
  };

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{objectID}). {author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <button type="button" className="button-inline" onClick={dispatchArchiveAction}>
          {isArchivedVisible ? 'Unarchive' : 'Archive'}
        </button>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  isArchivedVisible: getArchivedVisibilityState(state)
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
  onUnarchive: id => dispatch(doUnarchiveStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
