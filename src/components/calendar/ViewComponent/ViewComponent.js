import React from "react";
import styled from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const borderColor = "#D5D5D5";

const Todos = () => {
  return <div>to:2, do:3</div>;
};

const StyledCalendar = styled.div`
  float: left;
  width: 50%;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.4);
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
  text-align: right;
  font-size: 14px;
  border-right: 1px solid ${borderColor};
  border-bottom: 1px solid ${borderColor};
`;

const ViewComponent = props => {
  const { today, currentMonth, currentYear, previous, next } = props;
  let firstDay = new Date(currentYear, currentMonth).getDay();
  let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
  const items = [];
  let date = 1;
  let end = false;
  for (let i = 0; i < 6; i++) {
    const dummy = [];
    let did = false;
    for (let j = 0; j < 7; j++) {
      let innerdate = date;
      const my = () => {
        console.log(innerdate);
      };
      if (i === 0 && j < firstDay) {
        dummy.push(<StyledTd></StyledTd>);
      } else if (date > daysInMonth) {
        dummy.push(<StyledTd></StyledTd>);
        end = true;
      } else {
        did = true;
        dummy.push(<StyledTd onClick={() => my()}>{date}</StyledTd>);
        date++;
      }
    }
    if (end && did === false) {
      break;
    }
    items.push(<tr valign="top">{dummy}</tr>);
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

          {/* <StyledTh>SUN</StyledTh>
          <StyledTh>MON</StyledTh>
          <StyledTh>TUE</StyledTh>
          <StyledTh>WED</StyledTh>
          <StyledTh>WHU</StyledTh>
          <StyledTh>FRI</StyledTh>
          <StyledTh>SAT</StyledTh> */}
        </tr>
        {items}
      </StyledTable>
    </StyledCalendar>
  );
};

export default ViewComponent;