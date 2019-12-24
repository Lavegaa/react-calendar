import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { todos } from "../../../../store/modules/todolist";
import TodoItem from "../TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const { currentDay, currentMonth, currentYear } = useSelector(state => ({
    currentDay: state.date.currentDay,
    currentMonth: state.date.currentMonth,
    currentYear: state.date.currentYear
  }));
  useEffect(() => {
    const filteredTodos = (currentDay, currentMonth, currentYear) =>
      dispatch(todos(currentDay, currentMonth, currentYear));
    filteredTodos({
      currentDay: currentDay,
      currentMonth: currentMonth,
      currentYear: currentYear
    });
  }, [currentDay, currentMonth, currentYear]);

  const { _todos } = useSelector(state => ({
    _todos: state.todolist.filteredTodos
  }));
  return (
    <TodoListBlock>
      {_todos && _todos.length ? (
        _todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))
      ) : (
        <div>아직 할일이 없어요.</div>
      )}
    </TodoListBlock>
  );
};

export default TodoList;
