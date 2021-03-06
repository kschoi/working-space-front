import styled from "styled-components";

const DetailStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  hr {
    width: calc(100vw - 32px);
    height: 1px;
    border: none;
    background-color: #f5f5f5;
    margin: 0 auto;
  }
  .tag-list-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #f5f5f5;
  }
  .tag-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .tag-text {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }
  .tag-length {
    font-size: 12px;
    line-height: 16px;
  }
`;

export default DetailStyled;
