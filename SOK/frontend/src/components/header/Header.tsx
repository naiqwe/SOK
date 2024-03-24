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
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logoutUser } from "../../store/reducers/ActionCreators";

interface INavItem {
  name: string;
  route: string;
}

export const Header = () => {
  const user = useAppSelector((state) => state.user);
  const dispath = useAppDispatch();
  const nav = useNavigate();
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
  const navItems: INavItem[] = [
    { name: "Главная", route: HOME_ROUTE },
    { name: "Начать обмен", route: SWAP_ROUTE },
    { name: "Мои обмены", route: "/myswaps" },
    { name: "Задать вопрос", route: "/questions" },
  ];

  function closeLoginModal() {
    setisLoginModalOpen(false);
  }

  function openLoginModal() {
    setisLoginModalOpen(true);
  }

  function closeRegisterModal() {
    setisRegisterModalOpen(false);
  }

  function openRegisterModal() {
    setisRegisterModalOpen(true);
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
              {user.isAuth ? (
                <List sx={{ display: "flex" }}>
                  <ListItemButton
                    onClick={() => dispath(logoutUser())}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText>Выйти</ListItemText>
                  </ListItemButton>
                </List>
              ) : (
                <List sx={{ display: "flex" }}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={openLoginModal}
                      sx={{ textAlign: "center" }}
                    >
                      <ListItemText>Войти</ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={openRegisterModal}
                      sx={{ textAlign: "center" }}
                    >
                      <ListItemText>Регистрация</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              )}
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
      <AuthModal
        type={"login"}
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
      ></AuthModal>
      <AuthModal
        type={"register"}
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      ></AuthModal>
    </>
  );
};
