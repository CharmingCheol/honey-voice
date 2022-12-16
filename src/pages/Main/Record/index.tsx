import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import * as S from "./index.style";

const RecordComponent = () => {
  return (
    <S.PageWrapper>
      <h1>문장을 입력하여 녹음 해보세요</h1>
      <DropdownButton title="기본 목소리" variant="secondary">
        <Dropdown.Item>기본 목소리</Dropdown.Item>
        <Dropdown.Item>미지</Dropdown.Item>
      </DropdownButton>
      <textarea></textarea>
      <audio controls></audio>
      <Button variant="success" className="submit-btn">
        전송하기
      </Button>
    </S.PageWrapper>
  );
};

export default RecordComponent;
