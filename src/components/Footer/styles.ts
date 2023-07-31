import styled from "styled-components";

export const FooterSection = styled("footer")`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(58, 62, 89, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 12px;
  padding-top: 2rem;
  min-height: 300px;
  position: relative;
  z-index: 7;
  bottom: 0;
  width: 100%;
  // padding: 1rem 20px;
`;
export const CTAButton = styled("button")`
  border: 1px solid #ffbe55;
  padding: 0.4rem 2.5rem;
  // margin: 0 2rem;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  filter: drop-shadow(0px 3px 6px rgba(248, 187, 90, 0.16));
  background: linear-gradient(180deg, #ffbe55 11.25%, #ffac27 80%);
  box-shadow: 0px 4px 30px 10px rgb(255, 190, 85, 0.25);
  color: #020202;
  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 768px) and (orientation: portrait) {
    margin-top: 10px;
  }
`;

export const FooterLabel = styled("p")`
  font-size: 1rem;
  color: #b2b3cf;
  padding: 10px 20px;
`;

export const NewsletterLabel = styled("p")`
  font-size: 1.1rem;
  color: #b2b3cf;
  margin-bottom: 0;
`;
export const Subtitle = styled("h6")`
  font-size: 1rem;
  align-items: center;
  font-weight: 1000;
  color: #b2b3cf;
  // padding: 10px 20px;
  padding: 30px;
`;
export const LogoContainer = styled("div")`
  // border-right: 1px solid rgba(98, 99, 129, 0.6);
`;
export const FooterTextInput = styled("input")`
  border: 1px solid #83839a;
  box-sizing: border-box;
  border-radius: 80px;
  background-color: #252641;
  margin: 10px 20px;
  color: #83839a;
`;
export const FooterButton = styled("button")`
  background-color: #eb7a02;
  border-radius: 60px;
  border: 1px solid #eb7a02;
  margin: 10px 20px;
  color: #fff;
  font-size: 1rem;
`;

export const PP = styled("p")`
  color: #b2b3cf;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin: 1rem 0 1rem;
  padding: 0 1.5rem;
  border-right: 1px solid #b2b3b3;
  @media only screen and (max-width: 600px) {
    border-right: none;
  }
`;
