import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  --main-bg-color: #f5ac2d;
  

  p {
    margin: 0;
  }

  div.page-body {
    width: 75vw;

    article.my-info {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 64px;
      border-radius: 20px;
      border: 1px solid #c0c0c0;
      padding: 40px;

      h2 {
        margin-bottom: 32px;
      }

      span {
        margin-bottom: 16px;
      }
      
      div.point-area {
        display : flex;
        flex-direction: column;
        text-align: center;
        button {
          width:150px;
          margin-top: 40px;
          background-color: var(--main-bg-color);
          transition: 0.2s ease;
          border: 0;
          border-radius: 10px;

          &:hover{
            background-color: var(--stby-bg-color);
          }
          &:active{
            background-color: var(--dark-bg-color);
          }
        }
      }
    }

    article.list {
      border-radius: 20px;
      border: 1px solid #c0c0c0;
      padding: 40px;
      
      h2 {
        margin-bottom: 24px;
      }

      .list-group {
        overflow-y: scroll;
        height: 450px;
      }
    }
  }
`;
