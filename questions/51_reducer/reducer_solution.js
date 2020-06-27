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
        return [{
          completed: false,
          id: state.length,
          text: action.text },
          ...state
        ]
          
        case  types.DELETE_TODO:
          return state.filter(curr=>curr.id !== action.id)
        case types.COMPLETE_TODO:
          return state.reduce(acc,curr) => {
              if(curr.id===action.id) {
                  curr.completed=true;
              }
              acc.push(curr)
              return acc,[]
            }
          }
      default:
        return state;
    }
  };