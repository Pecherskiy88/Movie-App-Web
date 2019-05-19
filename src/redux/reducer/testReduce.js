function test (state = 0, action) {
    switch (action.type){
        case 'CHANGE':
            return state + 1;
        default:
            return state;
    }
}
export default test;