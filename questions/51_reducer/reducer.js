//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

const initialState = [
  {
    item: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  //ADD YOUR CODE HERE
  switch (action.type) {
    case types.ADD_TODO: 
      return {
        ...state,
        completed: false,
        id: action.id,
        text: action.item,
        }
        
      case  types.DELETE_TODO:
        return {
          ...state,
          id: action.data,
        }
      case types.COMPLETE_TODO:
        return {
          completed: true,
        }
    default:
      return initialState;
  }
};

module.exports = { types, initialState, reducer };
