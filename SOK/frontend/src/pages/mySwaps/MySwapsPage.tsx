import React from "react";
import { AppLayout } from "../../components/appLayout/AppLayout";
import { Box } from "@mui/material";
import { Sidebar } from "./sidebar/Sidebar";
import { Content } from "./content/Content";

export const MySwapsPage = () => {
  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          pt: "50px",
        }}
      >
        <Sidebar></Sidebar>
        <Content></Content>
      </Box>
    </AppLayout>
  );
};
