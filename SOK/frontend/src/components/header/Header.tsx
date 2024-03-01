import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AuthModal } from "../modal/AuthModal";
import { useState } from "react";
export const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(true);
  const navItems = ["Главная", "Начать обмен", "Мои обмены", "Задать вопрос"];

  function closeModal() {
    setisModalOpen(false);
  }

  function openModal() {
    setisModalOpen(true);
  }

  return (
    <>
      <Box sx={{ display: "flex", color: "#fff" }}>
        <Box
          sx={{
            textAlign: "left ",
            flexGrow: "1",
            backgroundColor: "#1769aa",
            marginRight: "20px",
          }}
        >
          <Typography variant="h6" sx={{ my: 2, ml: 4 }}>
            LOGO
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#1769aa" }}>
          <List sx={{ display: "flex" }}>
            <ListItem disablePadding>
              <ListItemButton onClick={openModal} sx={{ textAlign: "center" }}>
                <ListItemText>Авторизация</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>Регистрация</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box mt="20px">
        <List
          sx={{ display: "flex", backgroundColor: "#1769aa", color: "#fff" }}
        >
          {navItems.map((item) => (
            <ListItem key={item} sx={{ pt: 0, pb: 0 }}>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  backgroundColor: "#698bad",
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <AuthModal isOpen={isModalOpen} onClose={closeModal}></AuthModal>
    </>
  );
};
