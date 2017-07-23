const types = {
    'INCREMENT': 'INCREMENT',
    'DECREMENT': 'DECREMENT'
};

export const INCREMENT = () => {
    return {
        type: types.INCREMENT
    };
};

export const DECREMENT = () => {
    return {
        type: types.DECREMENT
    };
};

export default types;