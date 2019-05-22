const initialState = [];

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case "DOWNLOADED":
      return action.data;
    default:
      return state;
  }
}
export default fetchReducer;
