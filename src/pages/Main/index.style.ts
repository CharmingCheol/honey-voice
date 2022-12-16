import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  --main-bg-color: #f5ac2d;
  --stby-bg-color: #c79114;
  --dark-bg-color: #744308;
  --light-bg-color: #ffecca;
  
  ul {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 0 !important;

    li {
      background-color: white;

      button {
        color: black;

        &:hover {
          color: black;
        }

        &.active {
          font-weight: bold;
          background: linear-gradient(to bottom, var(--light-bg-color), white) !important;
        }
      }
    }
  }

  .tab-content {
    width: 100%;
    height: 100%;
    border-left: 1px solid #dfdfdf;
    border-right: 1px solid #dfdfdf;

    .tab-pane {
      height: 100%;
      padding: 0 16px;

      &.active {
        background: #f9f9f9;
      }
    }
  }
`;
