import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import useInput from "../../Hooks/useInput";
import { UseNoteContext } from "../../Hooks/useContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div``;

const CloseBtn = styled.button``;

const Input = styled.input`
  padding: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addImageUrlOnSubmit } = useContext(UseNoteContext);

  const title = useInput();
  const imgUrl = useInput();

  console.log(title, imgUrl);

  return (
    <div>
      <Button onClick={handleOpen}>IMAGE</Button>
      <Modal open={open}>
        <Box sx={style}>
          <Wrapper>
            <Title>Image URL</Title>
            <CloseBtn onClick={handleClose}>닫기</CloseBtn>
          </Wrapper>
          <form onSubmit={addImageUrlOnSubmit}>
            <Contents>
              <label>Title</label>
              <Input
                type="text"
                name="title"
                value={title.value}
                onChange={title.onChange}
              ></Input>
            </Contents>
            <Contents>
              <label>URL</label>
              <Input
                type="text"
                name="imgUrl"
                value={imgUrl.value}
                onChange={imgUrl.onChange}
              ></Input>
            </Contents>
            <button>추가하기</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
