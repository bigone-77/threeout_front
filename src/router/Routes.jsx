import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "./../pages/auth/Login";
import Signin from "./../pages/auth/Signin";
import SetProfile from '../pages/auth/SetProfile';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<MainPage />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signin" element={<Signin />} />
      <Route path="auth/setProfile" element={<SetProfile />} />
    </ReactRouters>
  );
};

export default Routes;
