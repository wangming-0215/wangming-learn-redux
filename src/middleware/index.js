export default store => next => action => {
    let types;
    if (action.type instanceof Array) {
        types = action.type;
    } else {
        types = [action.type];
    }
    const [requsetType, successType] = types;
    next({ ...action, type: requsetType });
    if (action.payload) {
        const response = action.payload.func.apply(this, action.payload.args);
        return response.then(
            response => {
                next({ response, type: successType });
            },
            error => { }
        );
    }
}