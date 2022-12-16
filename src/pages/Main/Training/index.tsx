import { Button } from "react-bootstrap";

import * as S from "./index.style";

const TrainingComponent = () => {
  return (
    <S.PageWrapper>
      <h1>주어진 문장을 학습하세요</h1>
      <p>sdfhjlksdflksdjflksdjflsdflk</p>
      <audio controls></audio>
      <div className="button-wrapper">
        <Button variant="success">학습 시작</Button>
        <Button variant="success">들어보기</Button>
      </div>
    </S.PageWrapper>
  );
};

export default TrainingComponent;
