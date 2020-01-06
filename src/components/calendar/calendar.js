import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../store/modules/date";
import { dayTodolist } from "../../store/modules/todolist";
import ViewComponent from "./ViewComponent";

const Calendar = () => {
  let today = new Date();

  let [currentMonth, setCurrentMonth] = useState(today.getMonth());
  let [currentYear, setCurrentYear] = useState(today.getFullYear());

  const dispatch = useDispatch();
  const selectCalendar = (currentDay, currentWeek, currentMonth, currentYear) =>
    dispatch(select(currentDay, currentWeek, currentMonth, currentYear));

  useEffect(() => {
    dispatch(
      dayTodolist({ currentMonth: currentMonth, currentYear: currentYear })
    );
  }, [currentMonth, currentYear]);

  const { dayTodos } = useSelector(state => ({
    dayTodos: state.todolist.dayTodos
  }));

  const next = () => {
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    setCurrentMonth((currentMonth + 1) % 12);
  };

  const previous = () => {
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
  };
  return (
    <ViewComponent
      today={today}
      currentMonth={currentMonth}
      currentYear={currentYear}
      next={next}
      previous={previous}
      selectCalendar={selectCalendar}
      dayTodos={dayTodos}
    ></ViewComponent>
  );
};

export default Calendar;
