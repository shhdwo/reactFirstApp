// @flow

import type {Action} from "../actions/actions";

type State = {
    term: string,
    data: []
}

const initialState: State = {
    term: "linecladis",
    data: []
};

function searchReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case "TERM_CHANGE":
            return {
                ...state,
                term: action.value
            }
        case "DATA_UPDATE":
            return {
                ...state,
                data: action.value
            }
        default:
            return state;
    }
}

export default searchReducer;