import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 12px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 24px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 18px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 14px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const { currentDay, currentMonth, currentYear, currentWeek } = useSelector(
    state => ({
      currentDay: state.date.currentDay,
      currentMonth: state.date.currentMonth,
      currentYear: state.date.currentYear,
      currentWeek: state.date.currentWeek
    })
  );
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];
  return (
    <TodoHeadBlock>
      <h1>
        {currentYear}년{currentMonth}월{currentDay}일
      </h1>
      <div className="day">{week[currentWeek]}</div>
      <div className="tasks-left">할 일 5개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
