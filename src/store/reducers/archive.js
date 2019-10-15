import { STORY_ARCHIVE, STORY_UNARCHIVE } from '../../constants/actionTypes';

const INITIAL_STATE = [];

const applyArchiveStory = (state, action) => [...state, action.id];
const applyUnarchiveStory = (state, action) => state.filter(id => id !== action.id);

function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory(state, action);
    }
    case STORY_UNARCHIVE: {
      return applyUnarchiveStory(state, action);
    }
    default:
      return state;
  }
}
export default archiveReducer;
