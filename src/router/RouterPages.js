import React, { Suspense } from "react";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import CodeResetPassword from "../pages/codeResetPassword/CodeResetPassword";
import NewPassword from "../pages/newPassword/NewPassword";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route index element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/resetpassword"} element={<ResetPassword />} />
          <Route path={"/coderesetpassword"} element={<CodeResetPassword />} />
          <Route path={"/newpassword"} element={<NewPassword/>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
