import styled from "styled-components";

export const ProductPageComponent = styled("div")`
  margin: 0;
  align-items: center;
  justify-content: center;
  minheight: 400px;
`;

export const ProductPageLeft = styled("div")`
    width: 100%,
    height: 600px,
`;

export const ProductPageRight = styled("div")`
  margin: 2rem 1rem;
  width: 90%;
  // height: 600px;
`;

export const ProductThumb = styled("div")`
  margin: 0.5rem 1rem;
  padding: 0.5rem;
`;

export const BigPhotoContainer = styled("div")`
  width: 90%;
  height: 400px;
  background: radial-gradient(
    48.44% 48.44% at 50% 51.56%,
    #121825 0%,
    #5a6888 0.01%,
    #121825 100%
  );
`;

export const BigPhoto = styled("img")`
  border-radius: 10px;
  position: relative;
  top: 10%;
  left: 12%;
  height: 80%;
  width: 80%;
  box-sizing: border-box; ;
`;
export const ContentWrapper = styled("div")`
  margin: 2rem 0;
  padding: 1rem 0;
  position: relative;
  left: 1.5rem;
  top: 4rem;
  @media only screen and (max-width: 768px) {
    margin: 4rem 0 4rem;
    top: 7rem;
    left: 0rem;
  }
  @media only screen and (max-width: 500px) {
    margin: 4rem 0 4rem;
  }
  @media only screen and (max-width: 400px) {
    margin: 3rem 0;
  }
`;

export const ShareIconContainer = styled("div")`
  margin-right: 1rem;
  float: right;
  cursor: pointer;
`;

export const ProductHeading = styled("p")`
  margin: 1rem 0;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  @media only screen and (min-width: 1366px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1450px) {
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 1560px) {
    font-size: 1.7rem;
  }
  @media only screen and (min-width: 1750px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 1920px) {
    font-size: 1.8rem;
  }
`;
export const ProductSubtext = styled("p")`
  margin: 0 1rem 1rem;
  font-weight: 700;
  color: #f8bb5a;
`;

export const PriceButton = styled("button")`
  background: linear-gradient(
    181.08deg,
    #4d525f -25.05%,
    rgba(64, 60, 60, 0) 99.07%
  );
  padding: 0.5rem;
  margin: 1.5rem 1rem 1rem;
  color: #fff;
  filter: drop-shadow(0px 3.64444px 3.64444px rgba(0, 0, 0, 0.44));
  border-radius: 10.9333px;
  font-size: 1rem;
`;

export const BuyButton = styled("button")`
  margin: 1rem 0rem;
  padding: 0.7rem 2.5rem;
  border: none;
  font-weight: bold;
  font-size: 16px;
  background: linear-gradient(180deg, #ffbe55 26.35%, #ffac27 100%);
  box-shadow: 0px 4px 30px 10px rgb(255, 190, 85, 0.25);
  border-radius: 4px;
  @media only screen and (min-width: 1500px) {
    font-size: 22px;
  }
`;

export const PriceTag = styled("div")`
  margin: 1.5rem 0;
  max-width: 450px;
  // width: 80%;
  // height: 70px;
  padding: 1rem 0.5rem 0.5rem;
  box-shadow: 0px 3.47896px 3.47896px rgba(0, 0, 0, 0.44);
  border-radius: 10.4369px;
  background: linear-gradient(
    181.08deg,
    #4d525f -25.05%,
    rgba(64, 60, 60, 0) 99.07%
  );
  filter: drop-shadow(0px 3.64444px 3.64444px rgba(0, 0, 0, 0.44));
`;

export const CardHead = styled("span")`
  position: absolute;
  bottom: -30px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem;
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

export const PriceLabel = styled("p")`
  position: relative;
  top: -35px;
  font-size: 0.9rem;
  color: #fff;
  margin: 0;
  text-align: left;
  @media only screen and (min-width: 1400px) {
    font-size: 1.2rem;
    top: -40px;
  }
`;

export const PriceValue = styled(`p`)`
  position: relative;
  // top: 5px;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  @media only screen and (min-width: 1400px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 990px) {
    font-size: 1rem;
  }
`;

export const DirectorHead = styled("p")`
  margin: 1rem 0.2rem;
  font-size: 1.2rem;
  font-weight: 550;
  color: #fff;
  @media only screen and (min-width: 1400px) {
    font-size: 1.6rem;
  }
`;

export const DirectorMsg = styled("p")`
  color: #989ec0;
  font-size: 0.9rem;
  @media only screen and (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;

export const DescHead = styled("p")`
  font-size: 1.3rem;
  color: #fff;
  margin: 1rem 0 0;
  font-weight: 500;
  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) and (orientation: portrait) {
    margin: 0;
  }
`;

export const Desc = styled("p")`
  color: #989ec0;
  font-size: 0.9rem;
  width: 90%;
  @media only screen and (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;

export const LincenceContainer = styled("div")`
  width: 70%;
  border-right: 1px solid rgba(59, 63, 89, 1);
  @media only screen and (max-width: 600px) {
    border-right: none;
  }
`;
export const AtpatContainer = styled("p")`
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0;
  position: relative;
  top: 6px;
  left: -0.5rem;
  width: 70%;
  text-align: center;
  @media only screen and (max-width: 990px) {
    left: -1.5rem;
  }
  @media only screen and (max-width: 800px) {
    left: -1rem;
  }
  @media only screen and (max-width: 600px) {
    left: 1rem;
  }
`;
