import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  --main-bg-color: #f5ac2d;
  --stby-bg-color: #c79114;
  --dark-bg-color: #744308;
  --light-bg-color: #ffecca;

  div.page-body {
    display: flex;
    flex-direction: column;
    width: 40vw;
    padding-top: 200px;

    input {
      margin-top: 24px;
      padding: 6px 6px 6px 15px;
      border: 1px solid rgb(210,210,215);
      border-radius: 10px;
      transition: 0.2s;
      
      &:focus{
        padding: 16px 6px 16px 15px;
        outline: 4px solid var(--main-bg-color);
      }
    }

    button {
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
`;
