import { Route, Routes } from "react-router-dom";

import LogInPage from "./pages/LogIn";
import MainPage from "./pages/Main";
import ProfilePage from "./pages/Profile";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default RoutesComponent;
