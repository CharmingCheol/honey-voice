import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../services";

import * as S from "./index.style";

const LogInPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleChangePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleClickLogInBtn = async () => {
    if (!id || !password) {
      return;
    }
    const result = await AuthService.logIn(id, password);
    if (result) {
      navigate("/");
    }
  };

  return (
    <S.PageWrapper>
      <div className="page-body">
        <img src={'images/honeyvoice_Logo_simple.png'} alt={'HoneyVoice Logo'}/>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={handleChangeIdInput}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChangePasswordInput}
        />
        <Button onClick={handleClickLogInBtn} disabled={!id || !password}>
          로그인
        </Button>
      </div>
    </S.PageWrapper>
  );
};

export default LogInPage;
