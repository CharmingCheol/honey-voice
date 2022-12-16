import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding-top: 48px;
  }

  .dropdown {
    margin: 16px 0;
  }

  textarea {
    width: 100%;
    height: 320px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    margin-bottom: 16px;
  }

  audio {
    width: 100%;
  }

  button.submit-btn {
    margin-top: 32px;
  }
`;
