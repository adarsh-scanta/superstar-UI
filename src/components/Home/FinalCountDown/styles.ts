import styled from "styled-components";

export const Title = styled("div")`
  color: #e8eb63;
  text-shadow: 0px 1px 5px #e8eb63;
  font-weight: 600;
  text-align: center;
  font-size: 1.75rem;
  margin: 12px 0;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const TimeCard = styled("span")`
  padding: 13.5px 20px;
  background: #ffab26;
  margin: 14px;
  max-width: 66px;
  max-height: 65px;
  border-radius: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
    margin: 10px;
    padding: 15px 20px 0;
  }
`;
export const TimeCardContainer = styled("div")`
  display: flex;
  width: 80%;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  @media only screen and (max-width: 600px) {
    overflow: hidden;
    width: 80%;
  }
  @media only screen and (max-width: 500px) {
    overflow: hidden;
    width: 60%;
  }
`;
export const Number = styled("div")`
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 15px;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const SubText = styled("span")`
  color: black;
  font-size: 0.7rem;
  font-weight: bold;
`;

export const CountDownContainer = styled("div")`
  border: 5px dotted;
  border-color: yellow;
  background: linear-gradient(102.33deg, #2a2e3d 2.13%, #101520 98.35%);
  box-shadow: 0px 3.70984px 3.70984px 0.927461px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: -100px;
  left: 38%;
  z-index: 1;
  border-radius: 8.78481px;
  padding: 27px;
  @media only screen and (max-width: 1800px) {
    left: 35%;
  }
  @media only screen and (max-width: 1600px) {
    left: 35%;
  }
  @media only screen and (max-width: 1366px) {
    left: 35%;
  }
  @media only screen and (max-width: 1000px) {
    left: 25%;
  }
  @media only screen and (max-width: 800px) {
    left: 20%;
    max-width: 85%;
  }
  @media only screen and (max-width: 700px) {
    left: 14%;
    max-width: 85%;
  }
  @media only screen and (max-width: 600px) {
    left: 14%;
    max-width: 85%;
    padding: 4px;
  }
  @media only screen and (max-width: 500px) {
    left: 7%;
    max-width: 85%;
    padding: 4px;
  }
`;
