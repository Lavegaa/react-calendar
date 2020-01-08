import React from "react";
import styled, { css } from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DoneIcon from "@material-ui/icons/Done";
const borderColor = "#D5D5D5";

const StyledCalendar = styled.div`
  float: left;
  width: 50%;
  margin: 0 20px 0 140px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  text-align: center;
`;

const StyledDate = styled.div`
  margin-bottom: 10px;
`;

const StyledYear = styled.div`
  vertical-align: top;
  font-size: 10px;
`;

const StyledMonth = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
`;

const StyledMonthtext = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 70px;
  text-align: center;
`;

const StyledTable = styled.table`
  margin: auto;
  border-top: 1px solid ${borderColor};
  border-left: 1px solid ${borderColor};
`;

const StyledTh = styled.th`
  vertical-align: bottom;
  width: 80px;
  height: 30px;
  border-bottom: 1px solid ${borderColor};
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  &:last-child {
    border-right: 1px solid ${borderColor};
  }
`;

const StyledTd = styled.td`
  width: 80px;
  height: 80px;
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid ${borderColor};
  border-bottom: 1px solid ${borderColor};
  &:first-child div {
    color: #cc3d3d;
  }

  &:last-child div {
    color: #4641d9;
  }
`;

const StyledDay = styled.div`
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  & div {
    margin-top: 2px;
  }
  ${props =>
    props.today &&
    css`
      background: #38d9a9;
      color: white;
    `}
`;

const CheckCircle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0;
  border-radius: 7px;
  border: 1px solid #ced4da;
  font-size: 10px;
  vertical-align: middle;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const StyledSection = styled.div`
  width: 100%;
  margin-top: 4px;
  text-align: left;
  &:first-child {
    margin-top: 28px;
  }
  & span {
    margin-left: 6px;
    vertical-align: middle;
    color: black;
  }
  & path {
    color: #38d9a9;
  }
`;

const CalendarTodo = ({ ToDay, DoDay }) => {
  return (
    <div>
      <StyledSection>
        <CheckCircle />
        <span>{ToDay}</span>
      </StyledSection>
      <StyledSection>
        <CheckCircle done>
          <DoneIcon style={{ fontSize: 15 }} />
        </CheckCircle>
        <span>{DoDay}</span>
      </StyledSection>
    </div>
  );
};

const ViewComponent = ({
  today,
  currentMonth,
  currentYear,
  fixMonth,
  fixYear,
  previous,
  next,
  selectCalendar,
  dayTodos
}) => {
  let firstDay = new Date(currentYear, currentMonth).getDay();
  let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const items = [];
  let date = 1;
  let end = false;
  for (let i = 0; i < 6; i++) {
    const weekly = [];
    let did = false;
    for (let j = 0; j < 7; j++) {
      let innerDate = date;
      let innerWeek = j;
      const innerSelect = () => {
        selectCalendar({
          currentDay: innerDate,
          currentMonth: currentMonth + 1,
          currentWeek: innerWeek,
          currentYear: currentYear
        });
      };
      if (i === 0 && j < firstDay) {
        weekly.push(<StyledTd></StyledTd>);
      } else if (date > daysInMonth) {
        weekly.push(<StyledTd></StyledTd>);
        end = true;
      } else {
        let check = false;
        if (
          today === innerDate &&
          currentMonth === fixMonth &&
          fixYear === currentYear
        ) {
          check = true;
        }
        did = true;
        weekly.push(
          <StyledTd onClick={() => innerSelect()}>
            <StyledDay today={check}>
              <div>{date}</div>
            </StyledDay>
            {dayTodos[innerDate].to + dayTodos[innerDate].do !== 0 && (
              <CalendarTodo
                ToDay={dayTodos[innerDate].to}
                DoDay={dayTodos[innerDate].do}
              />
            )}
          </StyledTd>
        );
        date++;
      }
    }
    if (end && did === false) {
      break;
    }
    items.push(<tr valign="top">{weekly}</tr>);
  }

  return (
    <StyledCalendar>
      <StyledDate>
        <StyledMonth>
          <NavigateBeforeIcon onClick={previous}>previous</NavigateBeforeIcon>
          <StyledMonthtext>{currentMonth + 1}월</StyledMonthtext>
          <NavigateNextIcon onClick={next}>next</NavigateNextIcon>
        </StyledMonth>
        <StyledYear>{currentYear}</StyledYear>
      </StyledDate>

      <StyledTable>
        <tr>
          <StyledTh>일요일</StyledTh>
          <StyledTh>월요일</StyledTh>
          <StyledTh>화요일</StyledTh>
          <StyledTh>수요일</StyledTh>
          <StyledTh>목요일</StyledTh>
          <StyledTh>금요일</StyledTh>
          <StyledTh>토요일</StyledTh>
        </tr>
        {items}
      </StyledTable>
    </StyledCalendar>
  );
};

export default ViewComponent;
