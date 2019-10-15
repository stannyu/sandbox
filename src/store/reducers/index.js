import { combineReducers } from 'redux';

import storyReducer from './story';
import archiveReducer from './archive';
import visibilityStateReducer from './visibilityState'

const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
  visibilityState: visibilityStateReducer
});

export default rootReducer;
