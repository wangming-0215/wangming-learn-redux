import { connect } from 'react-redux';
import { REQUEST_POSTS } from '../actions/posts';
import Posts from '../components/Posts';

const mapStateToProps = (state) => {
    return {
        isFetching: state.posts.isFetching,
        didInvalidate: state.posts.didInvalidate,
        items: state.posts.items || [],
        lastUpdated: state.posts.lastUpdated
    };
}

export default connect(mapStateToProps)(Posts);