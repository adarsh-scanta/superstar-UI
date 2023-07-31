import styled from "styled-components";

export const InfoBox = styled("div")`
  // width: 220px;
  margin: 0 0.5rem;
  padding: 0 2rem;
  z-index: 7;
  background: linear-gradient(180deg, #3b3f5a 0%, rgba(59, 63, 90, 0) 100%);
  border-radius: 12px;
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.3);
    background: linear-gradient(180deg, #3b3f5a 0%, rgba(59, 63, 90, 0) 100%);
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.6));
    border-radius: 12px;
  }
  transition: all 0.05s ease-in 0s;
  @media only screen and (max-width: 600px) {
    height: 200px;
    width: 300px;
    margin-bottom: 5rem;
    position: relative;
    left: -1rem;
  }
  @media only screen and (min-width: 1600px) {
    min-width: 400px;
  }
  @media only screen and (min-width: 1400px) {
    min-width: 310px;
  }
  @media only screen and (min-width: 1170px) {
    width: 260px;
  }
  @media only screen and (min-width: 2000px) {
    min-width: 430px;
    margin: 0 1rem;
    min-height: 300px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 370px;
    margin: 0 1rem;
    min-height: 270px;
  }
  @media only screen and (min-width: 1700px) {
    min-width: 340px;
    margin: 0 1rem;
    min-height: 270px;
  }
`;

export const InfoBoxTitle = styled("p")`
  color: #fff;
  font-size: 1.4rem;
  margin: 1rem 0 0;
  text-align: center;
  font-weight: 500;
  @media only screen and (min-width: 1750px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 1.6rem;
  }
`;
export const InfoBoxSubTitle = styled("p")`
  color: #fff;
  letter-spacing: 0.5px;

  font-size: 0.9rem;
  margin: 1rem 0 0;
  text-align: center;
  // font-weight: 550;
  @media only screen and (min-width: 1750px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 1rem;
  }
`;

export const CardsContainer = styled("div")`
  top: 60%;
  margin: 0 2rem;
  @media only screen and (min-width: 1600px) {
    top: 50%;
    margin: 2rem 2rem;
  }
  @media only screen and (max-width: 990px) {
    top: 25%;
    margin: 0 6rem;
  }
  @media only screen and (max-width: 1400px) {
    top: 40%;
  }
  @media only screen and (max-width: 1600px) {
    top: 47%;
    margin-top: 2rem;
  }
`;
export const Title = styled("p")`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 6rem;
  text-align: center;
  // position: absolute;
  @media only screen and (max-width: 600px) {
    top: 2%;
    margin: 0 2rem;
  }
  @media only screen and (min-width: 1600px) {
    top: 34%;
    font-size: 2.8rem;
    margin: 0 6rem;
    margin-bottom: 2rem;

    margin-top: 10rem;
  }
  @media only screen and (max-width: 990px) {
    top: 13%;
    margin: 6rem;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 1400px) {
    // top: 45%;
    margin-top: 8rem;
  }
  @media only screen and (max-width: 1600px) {
    // top: 45%;
    margin-top: 12rem;
  }
`;

export const SectionContainer = styled("div")`
  width: 100%;
  background-color: #0d1016;

  overflow: hidden;
  min-height: 100vh;
  // margin: 4rem 0 2rem;
  background-size: cover;
  padding: 7rem 0 5rem;
  position: relative;

  @media only screen and (max-width: 1600px) {
    // min-height: 120vh;
  }
  @media only screen and (max-width: 1366px) {
    // min-height: 120vh;
  }
  @media only screen and (max-width: 990px) {
    padding: 0 1rem 2rem;
  }
`;
