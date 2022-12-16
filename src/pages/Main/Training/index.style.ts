import styled from "styled-components";

export const PageWrapper = styled.div`

  --main-bg-color: #f5ac2d;
  --stby-bg-color: #c79114;
  --dark-bg-color: #744308;
  --light-bg-color: #ffecca;
  
  h1 {
    padding-top: 48px;
    text-align: center;
  }

  p {
    height: 320px;
    padding: 24px;
    margin-top: 32px;
    border: 1px solid rgb(210,210,215);
    color:#434334;
    border-radius: 24px;
  }

  audio {
    width: 100%;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    
    button {
      margin-top: 16px;
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
    
    &:first-child{
      
    }
    
  }
`;
