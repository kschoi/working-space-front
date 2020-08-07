import styled from "styled-components";

const TagListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  margin-top: 20px;

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
  .tag-box {
    width: 100%;
    line-height: 1.5;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 12px;
    margin-bottom: 31px;
  }
`;

export default TagListStyled;