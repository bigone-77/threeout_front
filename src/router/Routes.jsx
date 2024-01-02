import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "./../pages/auth/Login";
import SignIn from "./../pages/auth/SignIn";
import SetProfile from "./../pages/SetProfile";

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/setProfile" element={<SetProfile />} />
    </ReactRouters>
  );
};

export default Routes;
