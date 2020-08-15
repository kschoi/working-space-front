import styled, { css } from "styled-components";

const activeCss = css`
  .footer_button {
    background: #ffbb44;
    color: white;
  }
`;

export const ModalContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #222;
  height: 100%;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;
  }
  .close_icon {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 24px;
    height: 24px;
  }
  .back_icon {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 24px;
    height: 24px;
  }
  .main_title {
    font-size: 18px;
    font-weight: bold;
  }
  .sub_title {
    font-size: 14px;
    margin-top: 8px;
  }
  .footer {
    width: 100%;
  }
  .footer_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    font-size: 14px;
    outline: none;
    background: #ccc;
    color: #222;
  }

  ${({ isActive }) => isActive && activeCss}
`;
