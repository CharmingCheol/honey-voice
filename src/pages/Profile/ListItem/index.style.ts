import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const ListItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .button-wrapper {
    display: flex;
    min-width: 200px;
    justify-content: flex-end;

    button {
      margin-left: 8px;
    }
  }
`;
