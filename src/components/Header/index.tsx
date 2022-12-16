import { NavLink } from "react-router-dom";

import * as S from "./index.style";

const Header = () => {
  return (
    <S.Header>
      <NavLink to="/">
        <h1>꿀보이스</h1>
      </NavLink>
      <NavLink to="/profile">
        <span>Profile</span>
      </NavLink>
    </S.Header>
  );
};

export default Header;
