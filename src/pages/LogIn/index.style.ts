import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  --main-bg-color: #f5ac2d;
  --stby-bg-color: #c79114;
  --dark-bg-color: #744308;

  div.page-body {
    display: flex;
    flex-direction: column;
    width: 40vw;
    padding-top: 200px;

    input {
      padding: 4px;
      margin-top: 24px;
    }

    input:focus {
      outline: 2px solid var(--main-bg-color);
    }

    button {
      margin-top: 40px;
      background-color: var(--main-bg-color);
      transition: 0.2s ease;
      border: 0;
    }
    
    button:hover {
      background-color: var(--stby-bg-color);
    }
    
    button:active {
      background-color: var(--dark-bg-color);
    }

  }
`;
