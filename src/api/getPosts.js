import callApi from '../middleware/callApi';

export async function getPosts(subreddit) {
    return await callApi(`https://www.reddit.com/r/${ subreddit }.json`);
}