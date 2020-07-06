import React from "react";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "../modal/modal.component";
import {
  DialogContainer,
  ButtonContainer,
  ContentContainer,
} from "./dialog-ok-cancel.styles";

const DialogOkCancel = ({
  open,
  handleCancel,
  handleOk,
  children,
  isPending,
}) => {
  return (
    <Modal open={open}>
      <DialogContainer>
        {isPending ? (
          <div style={{ margin: "30px 0 ", textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <ContentContainer>{children}</ContentContainer>
        )}
        <ButtonContainer disabled={isPending}>
          <Button variant="contained" color="primary" onClick={handleOk}>
            OK
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonContainer>
      </DialogContainer>
    </Modal>
  );
};

export default DialogOkCancel;
