import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { checkUser } from "../../store/reducers/ActionCreators";

export const AppRouter = () => {
  const dispath = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispath(checkUser());
  }, []);
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
