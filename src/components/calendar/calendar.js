import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../store/modules/date";
import { dayTodolist } from "../../store/modules/todolist";
import ViewComponent from "./ViewComponent";

const Calendar = () => {
  let date = new Date();
  let today = date.getDate();
  let [currentMonth, setCurrentMonth] = useState(date.getMonth());
  let [currentYear, setCurrentYear] = useState(date.getFullYear());
  const fixMonth = date.getMonth();
  const fixYear = date.getFullYear();
  const dispatch = useDispatch();

  const selectCalendar = (currentDay, currentWeek, currentMonth, currentYear) =>
    dispatch(select(currentDay, currentWeek, currentMonth, currentYear));
  //날짜별 todolist를 달력에 그려준다.
  useEffect(() => {
    dispatch(
      dayTodolist({ currentMonth: currentMonth, currentYear: currentYear })
    );
  }, [dispatch, currentMonth, currentYear]);

  const { dayTodos } = useSelector((state) => ({
    dayTodos: state.todolist.dayTodos,
  }));
  //다음달로 이동한다.
  const next = () => {
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    setCurrentMonth((currentMonth + 1) % 12);
  };
  //이전달로 이동한다.
  const previous = () => {
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
  };
  return (
    <ViewComponent
      today={today}
      currentMonth={currentMonth}
      currentYear={currentYear}
      fixMonth={fixMonth}
      fixYear={fixYear}
      next={next}
      previous={previous}
      selectCalendar={selectCalendar}
      dayTodos={dayTodos}
    ></ViewComponent>
  );
};

export default Calendar;
