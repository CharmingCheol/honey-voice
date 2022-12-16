import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  div.page-body {
    display: flex;
    flex-direction: column;
    width: 40vw;
    padding-top: 200px;

    input {
      padding: 4px;
      margin-top: 24px;
    }

    button {
      margin-top: 40px;
    }
  }
`;
