import { Dialog } from "@mui/material";
import React from "react";
import { RegisterForm } from "../auth/authForm/RegisterForm";
import { FormContainer } from "../auth/FormContainer/FormContainer";

interface AuthModalProps {
  onClose: Function;
  isOpen: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, isOpen }) => {
  return (
    <Dialog maxWidth="md" onClose={() => onClose()} open={isOpen}>
      <FormContainer closeModal={() => onClose}></FormContainer>
    </Dialog>
  );
};
