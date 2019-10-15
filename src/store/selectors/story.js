const isNotArchived = archivedIds => story => archivedIds.indexOf(story.objectID) === -1;
const isArchived = archivedIds => story => archivedIds.indexOf(story.objectID) !== -1;

const getReadableStories = ({ storyState, archiveState, visibilityState }) => {
  return storyState.filter(visibilityState.isArchivedVisible ? isArchived(archiveState) : isNotArchived(archiveState));
};
const getArchivedVisibilityState = ({ visibilityState }) => visibilityState.isArchivedVisible;

export { getReadableStories, getArchivedVisibilityState };
