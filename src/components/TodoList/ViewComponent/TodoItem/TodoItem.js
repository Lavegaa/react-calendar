import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 13px;
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
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ced4da;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
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
  font-size: 16px;
  font-weight: 700;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItem = ({ id, done, text, handleRemove, handleToggle }) => {
  return (
    <TodoItemBlock>
      <CheckCircle onClick={() => handleToggle(id)} done={done}>
        {done && <DoneIcon fontSize="small" />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => handleRemove(id)}>
        <DeleteIcon fontSize="small" />
      </Remove>
    </TodoItemBlock>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  text: PropTypes.string,
  handleRemove: PropTypes.func,
  handleToggle: PropTypes.func
};

TodoItem.defaultProps = {
  id: -1,
  done: false,
  text: "Item Text is null",
  handleRemove: () => {
    console.log("handleRemove is null");
  },
  handleToggle: () => {
    console.log("handleToggle is null");
  }
};

export default TodoItem;
