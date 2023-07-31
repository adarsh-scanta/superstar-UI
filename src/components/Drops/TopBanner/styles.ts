import styled from "styled-components";

export const BannerContainer = styled("div")`
  width: 100vw;
  height: 430px;
  position: relative;
  top: 0;
  // bottom:"0",
  left: 0;
  @media only screen and (max-width: 890px) {
    height: 280px;
  }
`;

export const BannerShadow = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 430px;
  background: linear-gradient(
      182.54deg,
      rgba(101, 101, 101, 0.14) -24.14%,
      #000000 107.04%
    ),
    #c4c4c4;
  mix-blend-mode: hard-light;
  border-radius: 2px;
  z-index: 1;
`;

export const ButtonsOnBannerContainer = styled("div")`
  position: absolute;
  bottom: 3%;
  left: 2%;
  z-index: 1;
`;

export const ButtonOnBanner = styled("button")`
  z-index: 1;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: #000;
  border: none;
  // box-shadow: 0px 0px 4px #F8BB5A;
  border-radius: 40px;
  @media only screen and (max-width: 890px) {
    padding: 0.25rem 1rem;
  }
`;
export const ButtonContent = styled("span")`
  color: #020202;
  font-size: 1rem;
  font-weight: bold;
  @media only screen and (max-width: 890px) {
    font-size: 0.8rem;
  }
`;
