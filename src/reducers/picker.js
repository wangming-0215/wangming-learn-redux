import types from '../actions/picker';

export const picker = (state = 'reactjs', action) => {
    switch (action.type) {
        case types.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};