const HTTP_METHODS = {
    GET: "GET",
}

const HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
};

const HTTP_ERROR_MESSAGE = {
    [HTTP_CODES.BAD_REQUEST]: "URL is invalid",
    [HTTP_CODES.UNAUTHORIZED]: "Unauthorized action",
    [HTTP_CODES.FORBIDDEN]: "Permission Denied",
    [HTTP_CODES.NOT_FOUND]: "Not Found",
    [HTTP_CODES.METHOD_NOT_ALLOWED]: "Method is not allowed",
    [HTTP_CODES.INTERNAL_SERVER_ERROR]: "Server Error",
    defaultErrorMessage: "HTTP status code not recognised",
};

const RESPONSE_TYPES = {
    JSON: "json",
};

const onFetchSuccess = (response, responseType) => {
    switch (responseType) {
        case RESPONSE_TYPES.JSON:
            return response.text().then(JSON.parse);
        default:
            throw Error("Response type not recognised");
    }
};

const handleServerResponse = (response, responseType) => {
    switch (response.status) {
        case HTTP_CODES.OK:
            return onFetchSuccess(response, responseType);
        default:
            throw Error(HTTP_ERROR_MESSAGE.defaultErrorMessage);
    }
};

export const customJSONHTTPFetch = (url) => {
    const conf = {
        method: HTTP_METHODS.GET,
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    };

    return (
        fetch(url, conf)
            .then((response) => handleServerResponse(response, RESPONSE_TYPES.JSON))
    );
};
