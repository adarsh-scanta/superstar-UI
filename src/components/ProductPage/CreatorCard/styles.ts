import styled from "styled-components";
import { Card } from "antd";

export const CreatorCardComponent = styled("div")`
  margin: 3rem 0 1rem 0;
  max-width: 700px;
`;
export const CardHead = styled("span")`
  position: absolute;
  bottom: -30px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
`;
export const CardSubHeading = styled("span")`
  position: absolute;
  bottom: -30px;
  display: flex;
  text-align: right;
  color: #f8bb5a;
  font-size: 1rem;
  margin: 1rem;
`;
export const CratorCardBox = styled(Card)`
  // width: 90%;
  // overflow-x: hidden;
  // overflow-y: scroll;
  // height: 250px;
  margin: 1rem 0;
  background: linear-gradient(180deg, #3b3f5a 0%, rgba(59, 63, 90, 0) 100%);

  border-radius: 12px;
`;
export const CreatorName = styled("span")`
  color: #fff;
  display: block;
  margin: 0.3rem 0;
  position: relative;
  top: 15px;
  left:0;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  @media only screen and (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const CreatorDiscription = styled("span")`
  color: #fff;
  display: block;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  @media only screen and (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;
