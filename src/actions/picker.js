const types = {
    'SELECT_SUBREDDIT': 'SELECT_SUBREDDIT',
};

export const SELECT_SUBREDDIT = (subreddit) => ({
    type: [types.SELECT_SUBREDDIT],
    subreddit,
});

export default types;