import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ModalSearchComponent = ({ show, onHide, value, onChange }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          <TextField
            type="text"
            size="small"
            value={value}
            onChange={onChange}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSearchComponent;
