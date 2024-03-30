import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [nickName, setNickName] = useState("");
  const listItem = [
    { name: "Предложения для обмена", link: "/myswaps" },
    { name: "Хочу обменять", link: "/myswaps/myoffers" },
    { name: "Хочу получить", link: "/myswaps/mywish" },
    { name: "Активные обмены", link: "/myswaps/activeoffers" },
    { name: "Отзывы", link: "/myswaps/reviews" },
    { name: "Личные данные", link: "/myswaps/cabinet" },
    { name: "Сообщения", link: "/myswaps/message" },
    { name: "Архив", link: "/myswaps/archive" },
  ];

  const nav = useNavigate();

  useEffect(() => {
    const nick = localStorage.getItem("userName");
    if (nick) {
      setNickName(nick);
    } else {
      setNickName("Анонимус");
    }
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: "260px" }}>
      <Box>
        <Typography>{nickName}</Typography>
      </Box>
      <Box>
        <List
          disablePadding
          sx={{ border: "1px solid #999", borderBottom: "none" }}
        >
          {listItem.map((item) => {
            return (
              <ListItem
                sx={{
                  borderBottom: "1px solid #999",
                  padding: "4px",
                  ":hover": {
                    bgcolor: "#E8DDB5",
                  },
                }}
                disablePadding
                key={item.link}
                onClick={() => nav(item.link)}
              >
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    pt: 0,
                    pb: 0,
                    ":hover": {
                      bgcolor: "#E8DDB5",
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
