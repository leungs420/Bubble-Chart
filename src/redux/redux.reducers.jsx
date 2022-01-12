import {SET_GRAPH_DATA} from "redux/redux.actions";

const initialStates = {
    graphData: undefined,
}

export default function rootReducer(state=initialStates, action) {
    switch (action.type) {
        case SET_GRAPH_DATA:
            return Object.assign({}, state, {graphData: action.data});
        default:
            return state;
    }
};
