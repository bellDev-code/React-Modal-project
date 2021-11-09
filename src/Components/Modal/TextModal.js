import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import useInput from "../../Hooks/useInput";

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

const Title = styled.div`
  padding-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
`;

export const TextModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const title = useInput();
  const contents = useInput();

  console.log(title, contents);

  return (
    <div>
      <Button onClick={handleOpen}>Memo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Text Memo</h2>
          <br />
          <Wrapper>
            <label>Title</label>
            <Input
              type="text"
              name="title"
              value={title.value}
              onChange={title.onChange}
            ></Input>
          </Wrapper>
          <Wrapper>
            <Title>Contents</Title>
            <Input
              type="text"
              name="contents"
              value={contents.value}
              onChange={contents.onChange}
            ></Input>
          </Wrapper>
          <button>추가하기</button>
        </Box>
      </Modal>
    </div>
  );
};
