import { connect } from 'react-redux';
import { SELECT_SUBREDDIT } from '../actions/picker';
import { REQUEST_POSTS } from '../actions/posts';
import { getPosts } from '../Api/getPosts'
import Picker from '../components/Picker';

const mapStateToProps = state => {
    return {
        selectedSubreddit: state.picker,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (nextSubreddit) => { dispatch(SELECT_SUBREDDIT(nextSubreddit)) },
        getPosts: (selectedSubreddit) => {
            dispatch(REQUEST_POSTS({ name: 'REQUEST_POSTS', func: getPosts, args: [selectedSubreddit] }));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Picker);    