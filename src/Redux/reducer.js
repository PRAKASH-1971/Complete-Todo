import * as types from "./actionTypes"


const initialState = {
    todos: [],
    isLoading: false,
    isError:false,
}

const reducer = (state = initialState, action) => {
  const {type, payload } = action;
switch(type){
  case types.GET_TODO_LISTS_REQUEST:
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
  case types.GET_TODO_LISTS_SUCCESS:
    return{
        ...state,
        todos: payload,
        isLoading:false,
        isError:false,
    };
  case types.GET_TODO_LISTS_FAILURE:
    return{
        ...state,
        isLoading:false,
        isError:true,
    }
  case types.ADD_TODO_REQUEST:
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
  case types.ADD_TODO_SUCCESS:
    var newTodos = [...state.todos, payload]
    return{
        ...state,
        todos: newTodos,
        isLoading:false,
        isError:false,
    };
  case types.ADD_TODO_FAILURE:
    return{
        ...state,
        isLoading:false,
        isError:true,
    }
  
    case types.TOGGLE_TODO_REQUEST:
    return{
        ...state,
        isLoading:true,
        isError:false,
    };
  case types.TOGGLE_TODO_SUCCESS:
    var newToggleTodos = state.todos.map((item)=>
        item.id === payload.id ? payload : item
    );
    return{
        ...state,
        todos: newToggleTodos,
        isLoading:false,
        isError:false,
    };
  case types.TOGGLE_TODO_FAILURE:
    return{
        ...state,
        isLoading:false,
        isError:true,
    }
    default:
        return state;
  }  
}

export {reducer}