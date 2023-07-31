import styled from "styled-components";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";

export const SettingTabs = styled("div")`
  //   background: linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%);
  border-radius: 8px;
  //   width:90%;
  cursor: pointer;
  margin: 2rem;
  padding: 0.5rem 1rem;
  // font-weight: 600;
  font-size: 1.3rem;
`;
export const SaveButton = styled("button")`
  margin: 0 0.5rem 2rem 0.5rem;
  // padding:  0.5 2rem;
  background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.5rem 0;
  border:none;
`;

export const CancelButton = styled("button")`
  margin: 0 0.5rem 2rem 0.5rem;
  // padding:  0.5 2rem;
  background: #232b38;
  border: 1px solid #ffbe55;
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.5rem 0;
`;

// export const CustomCheckbox = styled(Checkbox)`
//   ${(props) =>
//     props.backgroundColor &&
//     css`
//       & .ant-checkbox-checked .ant-checkbox-inner {
//         background-color: ${props.backgroundColor};
//         border-color: ${props.backgroundColor};
//       }
//     `}
// `;

export const DeleteButton = styled("button")`
  background: #232b38;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1.3rem;
  // font-weight: bold;
  &:hover {
    background: linear-gradient(180deg, #ffbe55 10.73%, #ffac27 82.08%);
    color: #020202;
    border: 1px solid #ffbe55;
  }
`;

export const SecurityButton = styled("button")`
  background: #232b38;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 300px;
  font-size: 1.3rem;
  // font-weight: bold;
  &:hover {
    background: linear-gradient(180deg, #ffbe55 10.73%, #ffac27 82.08%);
    color: #020202;
    border: 1px solid #ffbe55;
  }
`;
