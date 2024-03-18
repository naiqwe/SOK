import { Dialog } from "@mui/material";
import React from "react";
import { FormContainer } from "../auth/FormContainer/FormContainer";

interface AuthModalProps {
  onClose: Function;
  isOpen: boolean;
  type: "login" | "register";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  onClose,
  isOpen,
  type,
}) => {
  return (
    <Dialog maxWidth="md" onClose={() => onClose()} open={isOpen}>
      <FormContainer type={type} closeModal={() => onClose}></FormContainer>
    </Dialog>
  );
};
