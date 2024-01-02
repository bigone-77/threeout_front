import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "./../pages/auth/Login";
import Signin from "./../pages/auth/Signin";

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </ReactRouters>
  );
};

export default Routes;
