import types from '../actions/posts';

export const posts = (state = {}, action) => {
    switch (action.type) {
        case types.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
            };
        case types.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.response.data.data.children,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};