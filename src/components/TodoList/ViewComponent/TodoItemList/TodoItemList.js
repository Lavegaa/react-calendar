import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoItemList = ({
  filteredTodos,
  handleItemToggle,
  handleItemRemove
}) => {
  return (
    <TodoListBlock>
      {filteredTodos && filteredTodos.length ? (
        filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            handleToggle={handleItemToggle}
            handleRemove={handleItemRemove}
          />
        ))
      ) : (
        <div>아직 할일이 없어요.</div>
      )}
    </TodoListBlock>
  );
};

TodoItemList.propTypes = {
  filteredTodos: PropTypes.object,
  handleItemToggle: PropTypes.func,
  handleItemRemove: PropTypes.func
};

TodoItemList.defaultProps = {
  filteredTodos: {},
  handleItemToggle: () => {
    console.log("handleItemToggle is null");
  },
  handleItemRemove: () => {
    console.log("handleItemRemove is null");
  }
};

export default TodoItemList;
