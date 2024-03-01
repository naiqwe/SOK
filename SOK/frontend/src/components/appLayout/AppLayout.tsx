import React, { ReactNode } from "react";
import { Container } from "@mui/material";
import { Header } from "../header/Header";

interface Props {
  children?: ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#eee ", height: "100vh" }}>
      <Header></Header>
      {children}
    </Container>
  );
};
