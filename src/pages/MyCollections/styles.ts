import styled from "styled-components";

export const FollowButton = styled("button")`
  margin:0.8rem 0;
  background: #121825;
  padding: 0.5rem 1rem;
  border: 1px solid #f8bb5a;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const FollowButtonContainer = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
`;export const NFTLabel = styled("span")`
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0.4rem 0.4rem 0.4rem 0;
  font-weight: 500;

  padding: 0.2rem 0.5rem;
  @media only screen and (min-width: 1450px) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.2rem;
    margin: 0.8rem 0.8rem 0.8rem 0;
  }
`;

export const PriceSection = styled("div")`
  position: relative;
  top: 5px;
  font-size: 1.1rem;
  @media only screen and (min-width: 1400px) {
    top: 8px;
  }

  @media only screen and (min-width: 1600px) {
    top: 15px;
  }
`;

export const RulerContainer = styled("div")`
  position: relative;
  top: -10px;
  height: 10px;
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
  @media only screen and (min-width: 1400px) {
    font-size: 1.3rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.4rem;
    margin: 0 0.5rem;
  }
`;
export const NFTCard = styled("div")`
  width: 240px;
  position: relative;
  height: 450px;
  background: #221f20;
  border-radius: 8px;
  margin: 0 0.5rem;
  flex-shrink: 1;

  // z-index: 1;
  @media only screen and (min-width: 1260px) {
    width: 270px;
    height: 490px;
    margin: 0 0.5rem;
  }

  @media only screen and (min-width: 1350px) {
    width: 280px;
    height: 500px;
    margin: 0 0.5rem;
  }

  @media only screen and (min-width: 1400px) {
    width: 280px;
    height: 500px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1450px) {
    width: 290px;
    height: 530px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1500px) {
    width: 300px;
    height: 560px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 310px;
    height: 570px;
    margin: 0 0.5rem;
  }

  &:hover {
    position: relative;
    transform: scale(1.2, 1.2);
    z-index: 2;
    box-shadow: 0px 4px 30px 10px rgb(0, 0, 0, 0.5);
  }
  transition: all 0.1s ease-in;
`;


export const StatsNumber = styled("p")`
  color: #fff;
  padding: 0 0.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const FilterContainer = styled("div")`
  border: 1px solid #bcc1c5;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  min-width: 130px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
`;

export const StatsLabel = styled("p")`
  color: #fff;
  padding: 0 0.5rem;
  font-size: 1rem;
  margin: 0 0 1rem 0;
`;

export const SuperfanName = styled("p")`
  color: #fff;
  // font-weight: 700;
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

export const SuperfanID = styled("p")`
  color: #f8bb5a;
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;
export const SuperfanAddress = styled("p")`
  color: #fff;
  font-size: 1rem;
  margin: 0.5rem 0;
`;
