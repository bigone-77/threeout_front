import { Route, Routes as ReactRouters } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Main from "./../pages/Home/Main";
import SetProfile from "../pages/auth/SetProfile";
import AddFriendProfile from "./../pages/Home/AddFriendProfile";
import FriendProfile from "./../pages/Home/FriendProfile";
import RecordSticker from "./../pages/Home/RecordSticker";
import RecordText from "./../pages/Home/RecordText";
import DetailRecord from "./../pages/Home/DetailRecord";
import Ranking from "./../pages/Ranking";
import DangerPage from "../pages/danger/page";

const Routes = () => {
  return (
    <>
      <ReactRouters>
        <Route path="/auth">
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="setProfile" element={<SetProfile />} />
        </Route>
      </ReactRouters>

      <ReactRouters>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/addFriendProfile" element={<AddFriendProfile />} />
        <Route path="/main/friendProfile/:id" element={<FriendProfile />} />
        <Route
          path="/main/friendProfile/sticker/:id"
          element={<RecordSticker />}
        />
        <Route path="/main/friendProfile/text/:id" element={<RecordText />} />
        <Route
          path="/main/friendProfile/detail/:id"
          element={<DetailRecord />}
        />
        <Route path="/ranking" element={<Ranking />} />
      </ReactRouters>
      <ReactRouters>
        <Route path="/danger" element={<DangerPage />} />
      </ReactRouters>
    </>
  );
};

export default Routes;
