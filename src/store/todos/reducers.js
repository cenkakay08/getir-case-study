import * as TodoActions from "./types";

const initialState = {
  todos: {
    data: [],
    error: null,
    isLoading: false,
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoActions.FETCH_TODO_REQUEST:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: true,
        },
      };
    case TodoActions.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: action.payload,
          isLoading: false,
        },
      };
    case TodoActions.FETCH_TODO_FAILURE:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: action.payload,
          isLoading: false,
        },
      };
    case TodoActions.ADD_TODO_REQUEST:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: true,
        },
      };
    case TodoActions.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: [action.payload, ...state.todos.data],
          isLoading: false,
        },
      };

    case TodoActions.ADD_TODO_FAILURE:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: action.payload,
          isLoading: false,
        },
      };
    case TodoActions.REMOVE_TODO_REQUEST:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: true,
        },
      };
    case TodoActions.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: state.todos.data.filter(
            (todo) => todo.id !== action.payload.id
          ),
          isLoading: false,
        },
      };
    case TodoActions.REMOVE_TODO_FAILURE:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: action.payload,
          isLoading: false,
        },
      };
    case TodoActions.UPDATE_TODO_REQUEST:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: true,
        },
      };
    case TodoActions.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: state.todos.data.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
          isLoading: false,
        },
      };
    case TodoActions.UPDATE_TODO_FAILURE:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: action.payload,
          isLoading: false,
        },
      };

    default:
      return { ...state };
  }
};

export default todosReducer;
