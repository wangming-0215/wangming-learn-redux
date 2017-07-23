const types = {
    'ADD_TODO': 'ADD_TODO',
    'SET_VISIBILITY_FILTER': 'SET_VISIBILITY_FILTER',
    'TOGGLE_TODO': 'TOGGLE_TODO'
}

let nextTodoId = 0;

export const ADD_TODO = text => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    }
};

export const SET_VISIBILITY_FILTER = filter => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
};

export const TOGGLE_TODO = id => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
};

export default types;