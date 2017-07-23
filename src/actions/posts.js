const types = {
    'REQUEST_POSTS': 'REQUEST_POSTS ',
    'RECEIVE_POSTS': 'RECEIVE_POSTS '
};

export const REQUEST_POSTS = (payload = {}) => {
    return {
        type: [types.REQUEST_POSTS, types.RECEIVE_POSTS],
        payload: payload
    };
}

export default types;