import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  --main-bg-color: #f5ac2d;
  --stby-bg-color: #c79114;
  --dark-bg-color: #744308;
  --darker-bg-color: #502f05;
  --darkest-bg-color: #3a2205;


  h1 {
    text-align: center;
    padding-top: 48px;
  }

  .dropdown {
    margin: 12px 0;
  }

  textarea {
    width: 100%;
    height: 282px;
    padding: 12px 20px;
    box-sizing: border-box;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    margin-bottom: 16px;
    border: 1px solid rgb(210, 210, 215);
    color: #434334;
    border-radius: 24px;

    &:focus {
      outline: 2px solid var(--dark-bg-color)
    }
  }
}


audio {
  width: 100%;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  margin-top:6px;

  button {
    margin-top: 16px;
    background-color: var(--dark-bg-color);
    transition: 0.2s ease;
    border: 0;
    border-radius: 10px;

    &:hover{
      background-color: var(--darker-bg-color);
    }
    &:active{
      background-color: var(--darkest-bg-color);
    }

  }

}

//button.submit-btn, button.btn-success {
//  margin-top:16px;
//  background-color: var(--dark-bg-color);
//  transition: 0.2s ease;
//  border: 0;
//  border-radius: 10px;
//
//  &:hover {
//    background-color: var(--darker-bg-color);
//  }
//
//  &:active {
//    background-color: var(--darkest-bg-color);
//
//  }


`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
