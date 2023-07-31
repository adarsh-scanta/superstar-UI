import styled from "styled-components";

export const SlideTitle = styled("p")`
  font-family: Prompt Light;
  font-weight: 700;
  font-size: 1.5rem;
  //   line-height: 32px;
  margin: 1rem 0.5rem 0;
  letter-spacing: 0.02em;
  color: #ffffff;

  @media only screen and (max-width: 890px) {
    font-size: 1rem;
    margin: 1rem 0 0.5rem;
  }
`;

export const AuctionContainer = styled("div")`
  height: 800px;
  width: 100%;
  background: url(/img/icons/home/ACTION.png) no-repeat center center;
  @media only screen and (max-width: 890px) {
    height: 500px;
  }
`;

export const AuctionCard = styled("div")`
  position: relative;
  height: 700px;
  width: 800px;
  margin: 0 auto 0;
  background-size: cover;
  background: url(/img/icons/home/auctionCard.svg) no-repeat center center;

  @media only screen and (max-width: 890px) {
    // background: url(/img/icons/home/auctionCardLong.svg) no-repeat center center;
    width: 400px;
    height: 400px;
  }
`;

export const AuctionDataContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 2rem;
  @media only screen and (max-width: 890px) {
    top: 48%;
    left: 2%;
  }
`;

export const PriceBadge = styled("div")`
  width: 55%;
  padding: 0.5rem;
  margin: 1rem 0 0;
  background: linear-gradient(180deg, #4d525f 0%, #403c3c 100%);
  border-radius: 10.4369px;
  box-shadow: 0px 3.47896px 3.47896px rgba(0, 0, 0, 0.44);
  filter: drop-shadow(0px 3.64444px 3.64444px rgba(0, 0, 0, 0.44));
  @media only screen and (max-width: 890px) {
    border-radius: 5px;
    margin: 0 0 0;
  }
`;

export const AuctionDataRight = styled("div")`
  position: relative;
  top: -5%;
  left: 20%;
  @media only screen and (max-width: 890px) {
    left: 7%;
    top: -10%;
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
    margin: 0 0.5rem;
  }
`;

export const TumbnailContainer = styled("div")`
  margin: 1rem;
  width: 250px;
  height: 250px;
  @media only screen and (max-width: 890px) {
    width: 120px;
    height: 120px;
  }
`;

export const ShareIconContainer = styled("div")`
  position: relative;
  @media only screen and (max-width: 890px) {
    left: -35px;
    top:10px;
  }
`;

export const PlaceBidButton = styled("button")`
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  background: #ffab26;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    0px 3.6px 7.19px rgba(248, 187, 90, 0.16);
  border-radius: 5.19231px;
  @media only screen and (max-width: 890px) {
        padding:0.25rem 0.5rem;
          margin: 1rem 0;
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
  @media only screen and (max-width: 890px) {
    top: 0;
    left: 0;
    margin: 0.25rem 0;
    padding: 0.5rem 0;
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
