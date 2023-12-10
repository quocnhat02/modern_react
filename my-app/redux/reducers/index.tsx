import { combineReducers } from 'redux';
import counterReducer, { CounterState } from './counterReducer'; // Import CounterState from counterReducer

export interface RootState {
  counter: CounterState;
}

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
