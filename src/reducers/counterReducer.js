// @flow

import type {Action} from "../actions/actions";

type State = {
  counter: number
}

const initialState: State = {
  counter: 0
}

function counterReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + action.value
      }
    case 'SUBTRACT':
      return {
        counter: state.counter - action.value
      }
    default:
      return state;
  }
}

export default counterReducer;