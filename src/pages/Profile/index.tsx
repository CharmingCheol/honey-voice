import { Button, ListGroup } from "react-bootstrap";

import * as S from "./index.style";

const ProfilePage = () => {
  return (
    <S.PageWrapper>
      <div className="page-body">
        <article className="my-info">
          <h2>toby0806</h2>
          <span>내 포인트: 450</span>
          <Button variant="success">포인트 충전하기</Button>
        </article>
        <article className="list">
          <h2>내 음성 기록</h2>
          <ListGroup>
            {Array(20)
              .fill(0)
              .map(() => (
                <ListGroup.Item>
                  <p>
                    sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
                  </p>
                  <div className="button-wrapper">
                    <Button variant="success">재생</Button>
                    <Button variant="danger">삭제</Button>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </article>
      </div>
    </S.PageWrapper>
  );
};

export default ProfilePage;
