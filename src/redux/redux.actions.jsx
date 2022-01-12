import {customJSONHTTPFetch} from "components/utils/utils.makeRequest";

const GRAPH_ENDPOINT = "https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77";
export const SET_GRAPH_DATA = "SET_GRAPH_DATA";

export const getGraphData = () => (dispatch) => {
    customJSONHTTPFetch(GRAPH_ENDPOINT)
        .then(responseData => {
             dispatch({
                 type: SET_GRAPH_DATA,
                 data: responseData,
             })
        })
        .catch(err => console.error(err));
};
