import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 0 1rem;
  margin: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);
  background: #232b38;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
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
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #f5f9fa;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  // font-weight: 500;
  font-family: prompt bold;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem;
  color: #f5f9fa;
  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
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
  font-weight: bold;
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
`;
export const SignupButton = styled("button")`
  // background: #f8bb5a;
  // box-sizing: border-box;
  padding: 0.3rem 1.8rem;
  // box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  // border-radius: 3px;
  background: linear-gradient(180deg, #ffbe55 21.15%, #ffac27 100%);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
`;

export const ModalLoginButton = styled("button")`
  margin-bottom: 2rem;
  // padding:  0.5 2rem;
  background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0.5rem;
`;
