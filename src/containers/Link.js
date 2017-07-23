import { connect } from 'react-redux';
import { SET_VISIBILITY_FILTER } from '../actions/todoList';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(SET_VISIBILITY_FILTER(ownProps.filter))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);