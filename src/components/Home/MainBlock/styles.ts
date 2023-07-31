import styled from "styled-components";

export const MainBlockContainer = styled("div")`
  margin: 5rem auto 2rem;
  max-width: 1450px;
  min-height: 90vh;
  @media only screen and (max-width: 600px) {
    margin: 0rem auto 2rem;
  }
`;

export const SlideTitle = styled("p")`
  font-family: Prompt Light;
  font-weight: 700;
  font-size: 1.4rem;
  //   line-height: 32px;
  margin: 0.5rem 0.5rem 0;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media only screen and (max-width: 890px) {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0.5rem 0;
  }
`;

export const SlideSubTitle = styled("p")`
  font-family: Prompt Light;
  font-weight: 700;
  font-size: 0.8rem;
  //   line-height: 32px;
  margin: 0rem 0.5rem 0;
  letter-spacing: 0.02em;
  color: #5b78df;
  @media only screen and (max-width: 890px) {
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

export const RankContainer = styled("p")`
  font-family: Prompt Light;
  font-weight: 500;
  font-size: 1rem;
  //   line-height: 32px;
  margin: 0.5rem 0.5rem 0;
  letter-spacing: 0.02em;
  color: #fff;
  @media only screen and (max-width: 890px) {
    font-size: 0.9rem;
  }
`;

export const TopRightGlare = styled("div")`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  left: 3rem;
  top: 45%;
  background: #00628f;
  filter: blur(150px);
  @media only screen and (min-width: 1100px) {
    left: 5rem;
  }
  @media only screen and (min-width: 1200px) {
    left: 7rem;
  }
  @media only screen and (min-width: 1300px) {
    left: 10rem;
  }
  @media only screen and (min-width: 1400px) {
    left: 13rem;
  }
  @media only screen and (min-width: 1500px) {
    left: 16rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 350px;
    height: 350px;
    left: 12rem;
    top: 35%;
    filter: blur(180px);
  }
`;

export const TopLeftGlare = styled("div")`
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 100px;
  filter: blur(135px);
  left: -80px;
  top: 9%;
  z-index: 5;
  background: #00628f;
  @media only screen and (min-width: 1366px) {
    width: 240px;
    height: 240px;
    filter: blur(165px);
    left: -100px;
  }
  @media only screen and (min-width: 1600px) {
    width: 250px;
    height: 240px;
    filter: blur(165px);
    left: -100px;
  }
`;

export const PriceContainer = styled("p")`
  font-family: Prompt Light;
  font-weight: 500;
  text-align: center;
  font-size: 1rem;
  //   line-height: 32px;
  margin: 0.5rem 0.5rem 0;
  letter-spacing: 0.02em;
  color: #fff;
  @media only screen and (max-width: 890px) {
    font-size: 1rem;
  }
`;

export const CarouselContainer = styled("div")`
  width: 50%;
  height: 70%;
  margin: 0 auto;
  max-width: 800px;
  max-height: 600px;
  @media only screen and (max-width: 1440px) {
    height: 70%;
  }
  @media only screen and (max-width: 890px) {
    height: 60%;
  }
`;

export const TopBackground = styled("div")`
  background-size: cover;
  width: 100%;
  padding: 40px 0;
  // height: 860px;
  @media only screen and (max-width: 890px) {
    // height: 670px;
    width: 100%;
    padding: 0;
  }
`;

export const PriceContent = styled("p")`
  text-align: center;
  color: #fff;
  margin: 0 0.5rem 0;
  font-size: 0.8rem;
  @media only screen and (max-width: 890px) {
    font-size: 0.7rem;
  }
`;

export const PriceValue = styled("span")`
  font-size: 1rem;
  @media only screen and (max-width: 890px) {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const BuyButton = styled("button")`
  background: linear-gradient(180deg, #ffbe55 22.71%, #ffac27 100%);
  box-shadow: 0px 2.64865px 5.2973px rgba(248, 187, 90, 0.16);
  border-radius: 5.2973px;
  color: #020202;
  font-weight: 700;
  position: relative;
  font-size: 1rem;
  left: -0.5rem;
  margin: 0.5rem 0 0.5rem;
  border: none;
  padding: 5px 0.5rem;
  @media only screen and (max-width: 890px) {
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

export const CardBottomContainer = styled("div")`
  z-index: 0.3;
  position: relative;
  top: -20px;
  // height: 100px;
  background-color: #221f20;
  width: 98%;
  // border-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  @media only screen and (max-width: 890px) {
    // width: 300px;
  }
`;

export const Title1 = styled("span")`
  font-size: 3.12rem;
  letter-spacing: 1px;
  z-index: 7;
  margin: 0 1rem 0 0;
  font-weight: 500;
  text-align: left;
  line-height: 60px;
  @media only screen and (max-width: 1263px) {
    font-size: 2.5rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 2.8rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Title2 = styled("span")`
  letter-spacing: 1px;
  font-size: 3rem;
  z-index: 7;
  margin: 0 1rem 0 0;
  font-weight: 500;
  text-align: left;
  line-height: 60px;
  @media only screen and (max-width: 1263px) {
    font-size: 2.3rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 2.7rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.65rem;
  }
`;

export const SubTitle = styled("p")`
  font-size: 1.8rem;
  margin: 0.3rem 1rem 0.3rem 0;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: left;
  line-height: 50px;
  @media only screen and (max-width: 1263px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MovieLogo = styled("img")`
  width: 220px;
  position: relative;
  left: -2rem;
  @media only screen and (max-width: 1080px) {
    width: 220px;
  }
  @media only screen and (min-width: 1600px) {
    width: 220px;
  }
  @media only screen and (min-width: 1366px) {
    width: 200px;
  }
  @media only screen and (min-width: 1440px) {
    width: 250px;
  }
  @media only screen and (min-width: 1760px) {
    width: 250px;
  }
`;
export const Description = styled("p")`
  font-size: 1.6rem;
  margin: 1rem 0 1rem 0;
  letter-spacing: 1px;
  // padding: 0 0rem 0 0;
  font-weight: 500;
  text-align: left;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (max-width: 1263px) {
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.7rem;
    // margin: 1rem 2rem 1rem 2rem;
    width: 70%;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 1.9rem;
    width: 90%;
  }
`;
export const CTAButton = styled("button")`
  border: 1px solid #ffbe55;
  padding: 0.4rem 3rem;
  margin: 0 1rem 0 0;
  box-sizing: border-box;
  z-index: 5;
  font-size: 1.2rem;
  font-weight: 500;
  filter: drop-shadow(0px 3px 6px rgba(248, 187, 90, 0.16));
  background: linear-gradient(180deg, #ffbe55 11.25%, #ffac27 80%);
  box-shadow: 0px 4px 30px 10px rgb(255, 190, 85, 0.25);
  border-radius: 3px;
  color: #020202;
  @media only screen and (min-width: 1600px) {
    font-size: 1.5rem;
    border-radius: 3px;
  }
`;

export const LeftArrow = styled("div")`
  // background: #ffb743;
  // transform: matrix(-1, 0, 0, 1, 0, 0);
  // width: 50px;
  // height: 50px;
  position: relative;
  top: 360px;
  left: -200px;
  // border-radius: 23px;
  @media only screen and (max-width: 450px) {
    top: 380px;
    left: -140px;
  }
  @media only screen and (max-width: 990px) {
    top: 380px;
    left: -200px;
  }
  @media only screen and (min-width: 1600px) {
    top: 420px;
    left: -250px;
  }
`;

export const RightContainer = styled("div")`
  margin: 0;
  position: relative;
  top: -6rem;
  max-height: 600px;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1500px) {
    // top: 0rem;
    // left: -2rem;
    margin: 2rem 0 1rem 4rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    left: 0;
  }
`;

export const RightArrow = styled("div")`
  // background: #ffb743;
  // transform: matrix(-1, 0, 0, 1, 0, 0);
  // width: 50px;
  // height: 50px;
  position: relative;
  top: 280px;
  right: -200px;
  // border-radius: 23px;
  @media only screen and (max-width: 450px) {
    top: 290px;
    right: -200px;
    // display: none;
  }
  @media only screen and (min-width: 1600px) {
    top: 340px;
    right: -250px;
  }
`;
export const NFTCard = styled("div")`
  margin-top: 2rem;
  width: 280px;
  height: 480px;
  position: relative;
  left: 3.5rem;
  background: #221f20;
  border: 5px solid #221f20;
  box-sizing: border-box;
  border-radius: 8.82883px;
  @media only screen and (min-width: 1500px) {
    width: 300px;
    left: 3rem;
    height: 520px;
  }
  @media only screen and (min-width: 1600px) {
    width: 300px;
    left: 5rem;
    height: 520px;
  }
  @media only screen and (max-width: 1080px) {
  }
  @media only screen and (max-width: 600px) {
    left: 1.5rem;
  }
`;

export const LeftContainer = styled("div")`
  margin: 2rem 0 0 5rem;
  @media only screen and (max-width: 600px) {
    margin: 8rem 1rem 0 2rem;
    width: 90%;
  }
  @media only screen and (min-width: 1500px) {
    margin: 2rem 0 0 3rem;
  }
  @media only screen and (min-width: 1550px) {
    margin: 2rem 0 0 0rem;
  }
`;

export const NFTLabel = styled("span")`
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.4rem 0.4rem 0.4rem 0;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  @media only screen and (min-width: 1500px) {
    font-size: 1.2rem;
    margin: 0.8rem 0.8rem 0.8rem 0;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.2rem;
    margin: 0.8rem 0.8rem 0.8rem 0;
  }
`;

export const PriceSection = styled("div")`
  position: relative;
  top: 10px;
  @media only screen and (min-width: 1600px) {
    top: 15px;
  }
`;
export const RulerContainer = styled("div")`
  position: relative;
  top: -10px;
  height: 2px;
  width: 100%;
  @media only screen and (min-width: 1600px) {
    top: 0;
  }
`;

export const Price = styled("p")`
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
    margin: 0 0.5rem;
  }
`;

export const CarouselContainerRight = styled("div")`
  max-width: 470px;
  @media only screen and (min-width: 1600px) {
    max-width: 560px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;
