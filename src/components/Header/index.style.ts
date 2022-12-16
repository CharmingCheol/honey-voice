import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 96px;
  margin-bottom: 32px;
  border-bottom: 1px solid #cfcfcf;

  span {
    margin-right:48px;
    font-weight: bold;
  }

  a {
    height:100%;
    color: black;
    text-decoration: none;
  }

  img{
    padding:10px 0;
    margin:0 15px;
    height:100%;
  }
  
  img:hover,
  span:hover {
    cursor: pointer;
  }
`;
