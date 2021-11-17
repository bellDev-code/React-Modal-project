import React, { useContext } from "react";
import { UseNoteContext } from "../../Hooks/useContext";
import styled from "@emotion/styled";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const List = () => {
  const { note } = useContext(UseNoteContext);
  return (
    <Container>
      메모장
      {note.map((item, index) => {
        return (
          <Wrapper key={index}>
            <div>{item.title}</div>
            <div>{item.contents}</div>
            <div>{item.imageTitle}</div>
            <div>{item.imgUrl}</div>
            <button>삭제</button>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default List;
