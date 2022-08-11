const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

const initState = localStorage.getItem('todos') ?  JSON.parse(localStorage.getItem('todos')) : [];

export default function todosReducer (state = initState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case CHANGE_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title, deadline: action.payload.deadline };
        }
        return item;
      });
    default:
      return state;
  }
};

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const changeTodo = (id, newTitle, newDeadline) => ({
  type: CHANGE_TODO,
  payload: {
    id,
    title: newTitle,
    deadline: newDeadline,
  },
});