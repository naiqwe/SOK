import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import { AuthModal } from "../modal/AuthModal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOME_ROUTE, SWAP_ROUTE } from "../../utils/consts";
import style from "./header.module.css";

interface INavItem {
  name: string;
  route: string;
}

export const Header = () => {
  const nav = useNavigate();
  const [isModalOpen, setisModalOpen] = useState(false);
  const navItems: INavItem[] = [
    { name: "Главная", route: HOME_ROUTE },
    { name: "Начать обмен", route: SWAP_ROUTE },
    { name: "Мои обмены", route: "/myswaps" },
    { name: "Задать вопрос", route: "/questions" },
  ];

  function closeModal() {
    setisModalOpen(false);
  }

  function openModal() {
    setisModalOpen(true);
  }

  function handleNavClick(route: string) {
    nav(route);
  }

  return (
    <>
      {/* <Box sx={{ backgroundColor: "#1769aa" }}> */}
      {/* <Box sx={{ backgroundColor: "#456990" }}> */}
      <Box sx={{ backgroundColor: "#4E598C" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", color: "#fff" }}>
            <Box
              sx={{
                textAlign: "left ",
                flexGrow: "1",
                marginRight: "20px",
              }}
            >
              <Typography variant="h6" sx={{ my: 2, ml: 4 }}>
                LOGO
              </Typography>
            </Box>
            <Box>
              <List sx={{ display: "flex" }}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={openModal}
                    sx={{ textAlign: "center" }}
                  >
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
        </Container>
      </Box>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: "#4EA5D9" }}
      >
        <List disablePadding sx={{ display: "flex", color: "#fff" }}>
          {navItems.map((item: INavItem) => (
            <ListItem disablePadding key={item.route} sx={{ pt: 0, pb: 0 }}>
              <ListItemButton
                className={style.navButton}
                onClick={() => handleNavClick(item.route)}
                sx={{
                  ":hover": {
                    bgcolor: "#3d81a9",
                  },
                  textAlign: "center",
                  backgroundColor: "inherit",
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText primary={item.name}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
      <AuthModal isOpen={isModalOpen} onClose={closeModal}></AuthModal>
    </>
  );
};
