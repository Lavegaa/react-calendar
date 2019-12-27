import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  todos,
  dayTodolist
} from "../../../../store/modules/todolist";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6bc6;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const TodoItem = props => {
  const { id, done, text } = props;
  const dispatch = useDispatch();
  const { currentDay, currentMonth, currentYear } = useSelector(state => ({
    currentDay: state.date.currentDay,
    currentMonth: state.date.currentMonth,
    currentYear: state.date.currentYear
  }));
  const filteredTodos = (currentDay, currentMonth, currentYear) =>
    dispatch(todos(currentDay, currentMonth, currentYear));

  const _toggleTodo = id => dispatch(toggleTodo(id));
  const _removeTodo = id => dispatch(removeTodo(id));
  const handleToggle = () => {
    _toggleTodo({
      id: id
    });
    filteredTodos({
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear
    });
    dispatch(
      dayTodolist({ currentMonth: currentMonth - 1, currentYear: currentYear })
    );
  };
  const handleRemove = () => {
    _removeTodo({
      id: id
    });
    filteredTodos({
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear
    });
    dispatch(
      dayTodolist({ currentMonth: currentMonth - 1, currentYear: currentYear })
    );
  };
  return (
    <TodoItemBlock>
      <CheckCircle onClick={handleToggle} done={done}>
        {done && <DoneIcon />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={handleRemove}>
        <DeleteIcon />
      </Remove>
    </TodoItemBlock>
  );
};
export default TodoItem;
