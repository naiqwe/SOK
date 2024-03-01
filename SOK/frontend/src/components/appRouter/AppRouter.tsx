import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.Component />}
            key={route.path}
          ></Route>
        );
      })}
    </Routes>
  );
};
