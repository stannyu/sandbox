import { STORY_ARCHIVE, STORY_UNARCHIVE, ARCHIVED_VISIBILITY_CHANGE } from '../../constants/actionTypes';

const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id
});

const doUnarchiveStory = id => ({
  type: STORY_UNARCHIVE,
  id
});

const changeArchivedVisibility = isVisible => ({
  type: ARCHIVED_VISIBILITY_CHANGE,
  isVisible
});

export { doArchiveStory, changeArchivedVisibility, doUnarchiveStory };
