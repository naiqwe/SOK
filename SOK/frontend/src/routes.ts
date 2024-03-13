import { AuthPage } from "./pages/auth/AuthPage";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";
import { SwapPage } from "./pages/swap/SwapPage";
import {
  HOME_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  SWAP_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: REGISTER_ROUTE,
    Component: AuthPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
  {
    path: SWAP_ROUTE,
    Component: SwapPage,
  },
];
