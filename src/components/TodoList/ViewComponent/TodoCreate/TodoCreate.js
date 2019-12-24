import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos, createTodo } from "../../../../store/modules/todolist";
import styled, { css } from "styled-components";
import AddIcon from "@material-ui/icons/Add";

const CircleButton = styled.div`
  background: #38d9a9;
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -20%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, -20%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  let { id, currentDay, currentMonth, currentYear } = useSelector(state => ({
    id: state.todolist.id,
    currentDay: state.date.currentDay,
    currentMonth: state.date.currentMonth,
    currentYear: state.date.currentYear
  }));
  const dispatch = useDispatch();
  const todo = {
    id: id,
    year: currentYear,
    month: currentMonth,
    day: currentDay,
    text: value,
    done: false
  };
  const filteredTodos = (currentDay, currentMonth, currentYear) =>
    dispatch(todos(currentDay, currentMonth, currentYear));
  const _createTodo = todo => dispatch(createTodo(todo));
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    const next = id++;
    e.preventDefault(); //새로고침 방지
    _createTodo({ todo: todo });
    filteredTodos({
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear
    });
    setValue("");
    setOpen(false);
  };
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <AddIcon />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
