import INITIAL_STATES from "test/redux";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {cleanup, render} from "@testing-library/react";
import thunk from "redux-thunk";
import rootReducer from "redux/redux.reducers";

const rerender = (component) => {
    jest.clearAllMocks();
    cleanup();
    return render(
        <Provider
            store={createStore(
                rootReducer,
                INITIAL_STATES,
                applyMiddleware(thunk)
            )}
        >
            {component}
        </Provider>
    );
};

export default rerender;