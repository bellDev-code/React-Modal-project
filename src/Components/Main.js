import React from "react";
import { ImageModal } from "./Modal/ImageModal";
import { TextModal } from "./Modal/TextModal";
import styled from "@emotion/styled";

const Container = styled.section``;

const Wrapper = styled.div`
  display: flex;
`;

const Main = () => {
  return (
    <Container>
      <h1>Modal List</h1>
      <Wrapper>
        <TextModal />
        <ImageModal />
      </Wrapper>
    </Container>
  );
};

export default Main;
