import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import RoutesComponent from "./Routes";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (location.pathname === "/login") {
      setShowHeader(false);
    }
    return () => {
      setShowHeader(true);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!window.sessionStorage.getItem("id")) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      {showHeader && <Header />}
      <RoutesComponent />
    </>
  );
};

export default App;
