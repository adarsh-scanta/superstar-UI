import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const HeaderSection = styled("header")`
  padding: 0.5rem 5rem 0.5rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  margin: 0;
  height: 75px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);
  background: #191c28;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem;
  }
  @media only screen and (min-width: 1600px) {
    padding: 0.5rem 2rem 0.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  // display: flex;
  z-index:7;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  color: #f5f9fa;
  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 1144px) {
    display: block;
  }

  display: none;

  svg {
    fill: #f5f9fa;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 1144px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 17px;
  font-weight: 500;
  color: #18216d;
  letter-spacing:1px;
  transition: color 0.2s ease-in;
  margin: 0.5rem;
  color: #f5f9fa;
  @media only screen and (max-width: 1400px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 21px;
  }
`;

export const Label = styled("span")`
  // font-weight: 400;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 1rem;
`;
export const DownIcon = styled(DownOutlined)<any>`
  // margin-top: px;
`;
export const Span = styled("span")`
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  color: #f5f9fa;
  &:hover,
  &:active,
  &:focus {
  }
`;
export const LoginButton = styled("button")`
  // border: 1px solid #f8bb5a;
  // box-sizing: border-box;
  padding: 0.3rem 1.5rem;
  // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  // border-radius: 3px;
  background: #232b38;
  border: 1px solid #ffbe55;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;
  @media only screen and (max-width: 1400px) {
    padding: 0.3rem 1rem;
  }
`;
export const SignupButton = styled("button")`
 
  padding: 0.3rem 1.5rem;

  background: linear-gradient(180deg, #ffbe55 21.15%, #ffac27 100%);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  @media only screen and (max-width: 1400px) {
    padding: 0.3rem 1rem;
  }
  
`;

export const ModalLoginButton = styled(Button)`
  margin: 0.5rem 0 1rem;
  width:100%;
  background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  // padding: 0.5rem;
  height: 2.5rem;
  border: none;
  &:hover {
    background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ModalCancelButton = styled(Button)`
  margin-bottom: 2rem;
  // margin-left: 1rem;
  width: 100%;

  background: #121825;
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  // padding: 0.5rem;
  height: 2.5rem;
  border: 1px solid #ffbe55;
  &:hover {
    background: #121825;
    border: 1px solid #ffbe55;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background: #121825;
    border: 1px solid #ffbe55;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const SearchContainer = styled("div")`
  position: relative;
  top: -5px;

  @media only screen and (max-width: 1280px) {
    left: -4rem;
  }
`;
