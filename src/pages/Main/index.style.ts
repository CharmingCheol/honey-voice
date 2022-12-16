import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
          background: #f9f9f9 !important;
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
