import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }

  div.page-body {
    width: 75vw;

    article.my-info {
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;

      h2 {
        margin-bottom: 32px;
      }

      span {
        margin-bottom: 16px;
      }

      button {
        width: 200px;
      }
    }

    article.list {
      h2 {
        margin-bottom: 24px;
      }

      .list-group {
        overflow-y: scroll;
        height: 450px;

        .list-group-item {
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
        }
      }
    }
  }
`;
