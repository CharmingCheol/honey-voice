import { Button } from "react-bootstrap";

import { ListItem } from "../../../types";
import * as S from "./index.style";

interface Props {
  listItem: ListItem;
}

const PlayListItem = ({ listItem }: Props) => {
  const handleClickPlayBtn = () => {};

  const handleClickDeleteBtn = () => {};

  return (
    <S.ListItem key={listItem.text}>
      <p>{listItem.text}</p>
      <div className="button-wrapper">
        <Button variant="success" onClick={handleClickPlayBtn}>
          재생
        </Button>
        <Button variant="danger" onClick={handleClickDeleteBtn}>
          삭제
        </Button>
      </div>
    </S.ListItem>
  );
};

export default PlayListItem;
