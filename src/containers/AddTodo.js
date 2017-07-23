import { connect } from 'react-redux';
import { ADD_TODO } from '../actions/todoList';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => {
            dispatch(ADD_TODO(text))
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);