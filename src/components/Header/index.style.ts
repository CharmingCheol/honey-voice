import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  margin-bottom: 32px;
  border-bottom: 1px solid #cfcfcf;

  span {
    position: absolute;
    right: 48px;
    top: 32px;
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
  }

  h1:hover,
  span:hover {
    cursor: pointer;
  }
`;
