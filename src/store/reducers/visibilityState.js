import { ARCHIVED_VISIBILITY_CHANGE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  isArchivedVisible: false
};

const changeArchivedVisibilityAction = (state, action) =>
  Object.assign({}, state, { isArchivedVisible: !action.isVisible });

function archivedVisibilityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARCHIVED_VISIBILITY_CHANGE: {
      return changeArchivedVisibilityAction(state, action);
    }
    default:
      return state;
  }
}

export default archivedVisibilityReducer;
