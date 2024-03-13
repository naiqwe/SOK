import React, { ReactNode } from "react";
import { Container } from "@mui/material";
import { Header } from "../header/Header";

interface Props {
  children?: ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Header></Header>
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "#eee ", height: "calc(100% - 112px)" }}
      >
        {children}
      </Container>
    </Container>
  );
};
