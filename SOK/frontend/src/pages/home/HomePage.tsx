import { AppLayout } from "../../components/appLayout/AppLayout";
import { Typography, Box, Container } from "@mui/material";
import style from "./homePage.module.css";

export const HomePage = () => {
  return (
    <AppLayout>
      <Box className={style.descriptionContainer}>
        <Container maxWidth="md" sx={{ mt: "120px" }}>
          <Typography
            component={"span"}
            variant={"body2"}
            fontSize={20}
            sx={{ mt: "70px", textAlign: "center" }}
          >
            Обмен книгами (буккроссер) становится всё более популярен. Это даёт
            шанс бумажным книгам продлить свою жизнь, помогает владельцам книг
            делиться хорошими историями и получать новые впечатления.
            <Typography
              component={"span"}
              variant={"body2"}
              fontSize={20}
              sx={{ mt: "20px" }}
            >
              Все буккроссеры любят свои книги и любят их читать. Они щедрые,
              новаторские, дружелюбные, добросердечные, веселые и образованные
              люди.
            </Typography>
            <Typography
              component={"span"}
              variant={"body2"}
              fontSize={20}
              sx={{ mt: "20px" }}
            >
              Наш сайт предлагает совершить не просто обмен, а добавить к этому
              увлекательному процессу элемент сюрприза. Подбор книг для обмена
              будет выполнен по пожеланиям участников, но только при получении
              книги станет известно, какая именно книга будет радовать своего
              владельца. Интересно? Тогда начинайте обмен и приглашайте своих
              друзей поучаствовать!
            </Typography>
          </Typography>
        </Container>
      </Box>
    </AppLayout>
  );
};
