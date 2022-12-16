import { Button } from "react-bootstrap";

import { UserService } from "services";
import { ListItem } from "types";

import * as S from "./index.style";

interface Props {
  listItem: ListItem;
  onDeleteRecord: (deletedItem: ListItem) => void;
}

const PlayListItem = ({ listItem, onDeleteRecord }: Props) => {
  const handleClickPlayBtn = () => {
    const audio = document.createElement("audio");
    audio.src = listItem.url;
    audio.play();
  };

  const handleClickDeleteBtn = () => {
    UserService.deleteRecord(
      listItem.id,
      window.sessionStorage.getItem("id") as string
    );
    onDeleteRecord(listItem);
  };

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
