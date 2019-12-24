import React from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const TodoTemplateBlock = styled.div`
  display: flex;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  width: 30%;
  height: 80vh;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  flex-direction: column;
`;

const ViewComponent = () => {
  return (
    <TodoTemplateBlock>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplateBlock>
  );
};

export default ViewComponent;
