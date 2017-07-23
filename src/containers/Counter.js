import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions/counter';
import Counter from '../components/Counter';

const mapStateToProps = state => {
    return {
        value: state.counter
    };
};

const mapDispatchProps = dispatch => {
    return {
        onIncrement: () => dispatch(INCREMENT()),
        onDecrement: () => dispatch(DECREMENT())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Counter);