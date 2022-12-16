import styled from "styled-components";

export const PageWrapper = styled.div`
  h1 {
    padding-top: 48px;
  }

  p {
    height: 320px;
    padding: 24px;
    margin-top: 32px;
    border: 1px solid black;
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
    }
  }
`;
