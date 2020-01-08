import { createAction, handleActions } from "redux-actions";

//action type
const SELECTED_DAY = "date/SELECTED_DAY";
const SELECTED_WEEK = "date/SELECTED_WEEK";
const SELECTED_MONTH = "date/SELECTED_MONTH";
const SELECTED_YEAR = "date/SELECTED_YEAR";
const SELECT = "date/SELECT";
//action creator
export const selectedDay = createAction(SELECTED_DAY);
export const selectedWeek = createAction(SELECTED_WEEK);
export const selectedMonth = createAction(SELECTED_MONTH);
export const selectedYear = createAction(SELECTED_YEAR);
export const select = createAction(SELECT);
//initial state
let today = new Date();
let currentDay = today.getDate();
let currentWeek = today.getDay();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();
const initialState = {
  currentDay: currentDay,
  currentWeek: currentWeek,
  currentMonth: currentMonth,
  currentYear: currentYear
};
//reducer
export default handleActions(
  {
    [SELECTED_DAY]: ({ currentDay }) => ({ currentDay: currentDay }),
    [SELECTED_WEEK]: ({ currentWeek }) => ({ currentWeek: currentWeek }),
    [SELECTED_MONTH]: ({ currentMonth }) => ({ currentMonth: currentMonth }),
    [SELECTED_YEAR]: ({ currentYear }) => ({ currentYear: currentYear }),
    //현재 날짜 state를 선택된 날짜로 수정한다.
    [SELECT]: (state, action) => {
      return {
        ...state,
        currentDay: action.payload.currentDay,
        currentWeek: action.payload.currentWeek,
        currentMonth: action.payload.currentMonth,
        currentYear: action.payload.currentYear
      };
    }
  },
  initialState
);
