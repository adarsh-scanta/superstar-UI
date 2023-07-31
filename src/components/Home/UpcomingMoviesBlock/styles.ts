import styled from "styled-components";

export const SectionContainer = styled("div")`
  background-size: cover !important;
  height: 520px;

  min-height: 75vh;

  @media only screen and (max-width: 600px) {
    height: 1400px;
  }
  @media only screen and (min-width: 1150px) {
    height: 530px;
  }
  @media only screen and (min-width: 1500px) {
    height: 550px;
  }
  @media only screen and (min-width: 1600px) {
    height: 600px;
  }

  @media only screen and (min-width: 1750px) {
    height: 550px;
  }
`;

export const Title = styled("p")`
  // color: #fff;
  // width: 90%;
  // font-size: 2rem;
  // font-weight: 500;
  // margin-bottom: 1rem;

  // @media only screen and (min-width: 1750px) {
  //   font-size: 3.2rem;
  // }
  // @media only screen and (min-width: 1600px) {
  //   font-size: 2.7rem;
  // }
  // @media only screen and (min-width: 1500px) {
  //   font-size: 2.4rem;
  // }
  font-size: 2.8rem;
  line-height: 60px;
  font-family: "Poppins", sans-serif;
  z-index: 2;
  margin: 0 2rem 0 0;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  @media only screen and (max-width: 1080px) {
    font-size: 2.5rem;
  }
`;
export const Description = styled("p")`
  font-size: 1.4rem;

  letter-spacing: 1px;
  line-height: 35px;
  font-family: "Poppins", sans-serif;
  margin: 1rem 2rem 1rem 0;
  font-weight: 500;
  @media only screen and (min-width: 1750px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 1400px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 22px;
  }
`;
export const CTAButton = styled("button")`
  border: 1px solid #ffbe55;
  padding: 0.5rem 3rem;
  // margin: 0 2rem;
  box-sizing: border-box;
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

export const CardOne = styled("div")`
  width: 220px;
  z-index: 7;
  height: 300px;
  margin: 0 0.5rem;
  background: #221f20;
  border: none;
  box-sizing: border-box;
  border-radius: 8.82883px;
  // position: absolute;
  // top: 10px;
  // left: -90px;
  @media only screen and (max-width: 990px) {
    margin: 2rem 0.5rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 240px;
    height: 350px;
  }
  @media only screen and (min-width: 1450px) {
    width: 280px;
    height: 400px;
  }
  @media only screen and (min-width: 1600px) {
    width: 290px;
    height: 420px;
  }
`;

export const CardTwo = styled("div")`
  margin: 0 0.5rem;
  width: 220px;
  z-index: 7;
  height: 300px;
  // position: relative;
  // left: 20%;
  // top: -10px;
  background: #221f20;
  border: none;
  box-sizing: border-box;
  border-radius: 8.82883px;
  @media only screen and (max-width: 990px) {
    margin: 2rem 0.5rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 240px;
    height: 350px;
  }
  @media only screen and (min-width: 1450px) {
    width: 280px;
    height: 400px;
  }
  @media only screen and (min-width: 1600px) {
    width: 290px;
    height: 420px;
  }
`;

export const CardContainer = styled("div")`
  top: 20%;
  left: 5%;
  @media only screen and (max-width: 990px) {
    // margin-top: 4rem;
    // left: 5%;
  }
  @media only screen and (max-width: 1600px) {
    top: 17%;
    margin-top:1.5rem;
    left: 2%;
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 4rem;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 6rem;
  }
  @media only screen and (min-height: 780px) {
    margin-top: 6rem;
  }
`;

export const RightBlock = styled("div")`
  margin: 4rem 3rem;
  width: 90%;
  @media only screen and (max-width: 1600px) {
    margin-top: 5rem;
    // margin: 20rem 1rem 3rem;
  }
  @media only screen and (max-width: 990px) {
    margin: 0 1rem 3rem;
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 4rem;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 6rem;
  }
  @media only screen and (min-height: 780px) {
    margin-top: 8rem;
  }
  @media only screen and (min-height: 880px) {
    margin-top: 10rem;
  }
`;

