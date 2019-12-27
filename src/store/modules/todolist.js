import { createAction, handleActions } from "redux-actions";

//action type
const TODOS = "todolist/TODOS";
const CREATE_TODO = "todolist/CREATE_TODO";
const REMOVE_TODO = "todolist/REMOVE_TODO";
const TOGGLE_TODO = "todolist/TOGGLE_TODO";
const DAY_TODOS = "todolist/DAY_TODOS";
const TODOS_IN_MONTH = "todolist/TODOS_IN_MONTH";
//action craetor
export const todos = createAction(TODOS);
export const createTodo = createAction(CREATE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const dayTodos = createAction(DAY_TODOS);
export const todosInMonth = createAction(TODOS_IN_MONTH);
//initial state
const initialState = {
  todos: [
    {
      id: 1,
      year: 2019,
      month: 12,
      day: 1,
      text: "리액트공부하기",
      done: false
    },
    {
      id: 2,
      year: 2019,
      month: 12,
      day: 1,
      text: "리액트공부하기22",
      done: true
    },
    {
      id: 3,
      year: 2019,
      month: 12,
      day: 31,
      text: "리액트공부하기24일",
      done: false
    },
    {
      id: 4,
      year: 2020,
      month: 12,
      day: 2,
      text: "리액트공부하기2020년",
      done: false
    }
  ],
  filteredTodos: [{}],
  id: 5,
  dayTodos: [{}]
};

//reducer
export default handleActions(
  {
    [TODOS]: (state, action) => {
      return {
        ...state,
        filteredTodos: state.todos.filter(todo => {
          return (
            todo.day === action.payload.currentDay &&
            todo.month === action.payload.currentMonth &&
            todo.year === action.payload.currentYear
          );
        })
      };
    },
    [CREATE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
        id: state.id + 1
      };
    },
    [TOGGLE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        )
      };
    },
    [REMOVE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    },
    [DAY_TODOS]: (state, action) => {
      const monthlyTodos = state.todos.filter(todo => {
        return (
          todo.month === action.payload.currentMonth &&
          todo.year === action.payload.currentYear
        );
      });

      return {
        ...state,
        todosInDayTo: _todosInDayTo,
        todosInDayDo: _todosInDayDo
      };
    }
  },
  initialState
);
