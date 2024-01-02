import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/auth/Login";
import SignIn from "../pages/auth/SignIn";
import SetProfile from "../pages/auth/SetProfile";

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<MainPage />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signIn" element={<SignIn />} />
      <Route path="auth/setProfile" element={<SetProfile />} />
    </ReactRouters>
  );
};

export default Routes;
