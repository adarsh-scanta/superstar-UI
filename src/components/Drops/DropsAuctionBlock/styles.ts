import styled from "styled-components";

export const SlideTitle = styled("p")`
  font-family: Prompt Light;
  font-weight: 700;
  font-size: 2rem;
  //   line-height: 32px;
  margin: 1rem 0.5rem;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media only screen and (max-width: 890px) {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;
export const SectionHeading = styled("h5")`
  text-align: left;
  color: #f5f9fa;
  margin: 1rem 0 0;
  font-size: 2.8rem;
  @media only screen and (max-width: 890px) {
    font-size: 2rem;
    margin: 0;
  }
`;

export const AuctionContainer = styled("div")`
  height: 600px;
  width: 100vw;
  @media only screen and (max-width: 890px) {
    height: 300px;
  }
`;

export const AuctionCard = styled("div")`
  position: relative;
  height: 600px;
  width: 1080px;
  margin: 0 auto 0;
  background-size: cover;
  background: url(/img/icons/drops/auctionArt.svg) no-repeat center center;
  @media only screen and (max-width: 890px) {
    background: url(/img/icons/drops/auctionArtLong.svg) no-repeat center center;
    width: 400px;
    height: 300px;
  }
`;
export const AuctionThumb = styled("img")`
  width: 300px;
  height: 300px;
  @media only screen and (max-width: 890px) {
    width: 100px;
    height: 100px;
  }
`;

export const AuctionCardContent = styled("div")`
  position: absolute;
  top: 27%;
  left: 8rem;
  @media only screen and (max-width: 890px) {
    top: 32%;
    left: 2.5rem;
  }
`;

export const AuctionCardContentRight = styled("div")`
  position: relative;
  top: -8%;
  left: 20%;
  @media only screen and (max-width: 890px) {
    top: -22%;
    left: 0px;
  }
`;

export const ShareIconContainer = styled("div")`
  position: relative;
  left: 0;
  top: 20px;
  @media only screen and (max-width: 890px) {
    position: relative;
    left: -10px;
    top: 10px;
  }
`;

export const PriceBadge = styled("div")`
  width: 50%;
  padding: 0.5rem;
  background: linear-gradient(180deg, #4d525f 0%, #403c3c 100%);
  border-radius: 10.4369px;
  box-shadow: 0px 3.47896px 3.47896px rgba(0, 0, 0, 0.44);
  filter: drop-shadow(0px 3.64444px 3.64444px rgba(0, 0, 0, 0.44));
  @media only screen and (max-width: 890px) {
    border-radius: 5px;
    width: 60%;
  }
`;

export const SmallLabel = styled("p")`
  font-size: 0.8rem;
  color: #fff;
  margin: 0;
  text-align: left;
  @media only screen and (max-width: 890px) {
    font-size: 0.6rem;
  }
`;

export const PriceBadgeContentLeft = styled("p")`
  font-size: 1.3rem;
  margin: 0.5rem 0;
  padding-right: 0.5rem;
  color: #fff;
  font-weight: bold;
  border-right: 1px solid #fff;
  text-align: right;
  @media only screen and (max-width: 890px) {
    font-size: 0.8rem;
    margin: 0;
  }
`;

export const PriceBadgeContentRight = styled("p")`
  font-size: 1.3rem;
  margin: 0.5rem;
  color: #fff;
  font-weight: bold;
  @media only screen and (max-width: 890px) {
    font-size: 0.8rem;
    margin: 0 0 0 0.5rem;
  }
`;

export const PlaceBidButton = styled("button")`
  margin: 2rem 0;
  position: relative;
  padding: 0.5rem 1rem;
  background: #ffab26;
  min-width:80px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    0px 3.6px 7.19px rgba(248, 187, 90, 0.16);
  border-radius: 5.19231px;
  @media only screen and (max-width: 890px) {
        padding:0.25rem 0.5rem;
          margin: 1rem 0;
          // left:-140%;
          // top:32%;
  }
`;

export const PlaceBidButtonContent = styled("span")`
  color: #020202;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  @media only screen and (max-width: 890px) {
    font-size: 0.7rem;
  }
`;

export const TimeLabelContainer = styled("p")`
  margin: 0 0.5rem;
  font-size: 0.8rem;
  color: #fff;
  text-align: left;
  @media only screen and (max-width: 890px) {
    font-size: 0.5rem;
  }
`;
export const TimeLabel = styled("span")`
  margin: 0 0.5rem;
`;

export const TimeDataContainer = styled("p")`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  text-align: left;
  @media only screen and (max-width: 890px) {
    font-size: 0.8rem;
  }
`;

export const TimeData = styled("span")`
  margin: 0 1rem;
`;

export const TimerContainer = styled("div")`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  position: relative;
  top: 10px;
  left: 2rem;

  border-radius: 10.44px;
  @media only screen and (max-width: 890px) {
    top: 0;
    left: 6%;
    margin: 1rem 0;
    padding: 0.5rem 0;
    border-radius: 8px;
  }
`;
export const TimerLabel = styled("p")`
  margin: 0 1rem 0.5rem;
  font-size: 0.8rem;
  color: #fff;
  text-align: left;
  font-weight: bold;
  @media only screen and (max-width: 890px) {
    font-size: 0.5rem;
  }
`;
