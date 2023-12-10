import { DECREMENT, INCREMENT } from '@/constants';

export interface CounterState {
  count: number;
}

interface CounterAction {
  type: string;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
