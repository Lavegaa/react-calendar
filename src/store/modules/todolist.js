import { createAction, handleActions } from "redux-actions";

//action type
const TODOS = "todolist/TODOS";
const CREATE_TODO = "todolist/CREATE_TODO";
const REMOVE_TODO = "todolist/REMOVE_TODO";
const TOGGLE_TODO = "todolist/TOGGLE_TODO";
const DAY_DOTOLIST = "todolist/DAY_TODOS";
const TODOS_IN_MONTH = "todolist/TODOS_IN_MONTH";
//action craetor
export const todos = createAction(TODOS);
export const createTodo = createAction(CREATE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const dayTodolist = createAction(DAY_DOTOLIST);
export const todosInMonth = createAction(TODOS_IN_MONTH);
//initial state
const initialState = {
  todos: [
    {
      id: 1,
      year: 2020,
      month: 1,
      day: 2,
      text: "리액트공부하기2020년",
      done: false,
    },
  ],
  filteredTodos: [{}],
  id: 2,
  dayTodos: [
    { start: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
    { to: 0, do: 0 },
  ],
};

//reducer
export default handleActions(
  {
    //선택된 날짜의 todolist를 return 한다.
    [TODOS]: (state, action) => {
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => {
          return (
            todo.day === action.payload.currentDay &&
            todo.month === action.payload.currentMonth &&
            todo.year === action.payload.currentYear
          );
        }),
      };
    },
    //새로운 todo를 만든다.
    [CREATE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
        id: state.id + 1,
      };
    },
    //선택된 todo의 done값을 변경한다.
    [TOGGLE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    },
    //선택된 todo를 제거한다.
    [REMOVE_TODO]: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
    //날짜별로 todo의 개수를 return한다.
    [DAY_DOTOLIST]: (state, action) => {
      const monthlyTodos = state.todos.filter((todo) => {
        return (
          todo.month === action.payload.currentMonth + 1 &&
          todo.year === action.payload.currentYear
        );
      });
      const inner = [
        { start: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
        { to: 0, do: 0 },
      ];
      // monthlyTodos.map((todo) => {
      //   if (todo.done === true) {
      //     inner[todo.day].do = inner[todo.day].do + 1;
      //   } else {
      //     inner[todo.day].to = inner[todo.day].to + 1;
      //   }
      // });
      return {
        ...state,
        dayTodos: inner,
      };
    },
  },
  initialState
);
