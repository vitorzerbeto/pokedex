import {
  TICK_ACTION,
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  RESET_ACTION,
} from "../actions/counterActions";

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export default function counter(state = initialState, { type, payload }) {
  switch (type) {
    case TICK_ACTION:
      return {
        ...state,
        lastUpdate: payload.lastUpdate,
        light: !!payload.light,
      };
    case INCREMENT_ACTION:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_ACTION:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET_ACTION:
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
}
