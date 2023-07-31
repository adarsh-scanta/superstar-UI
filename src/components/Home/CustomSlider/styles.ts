import styled from "styled-components";

export const NFTCard = styled("div")`
  width: 250px;
  position: relative;
  height: 440px;
  background: #221f20;
  border-radius: 8px;
  margin: 0 0.25rem;
  flex-shrink: 1;
  // z-index: 1;
  @media only screen and (max-width: 600px) {
    left: 0.5rem;
  }
  @media only screen and (min-width: 1260px) {
    width: 255px;
    height: 450px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1350px) {
    width: 270px;
    height: 450px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1400px) {
    width: 270px;
    height: 450px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1450px) {
    // width: 300px;
    // height: 510px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1500px) {
    width: 320px;
    height: 560px;
    margin: 0 0.5rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 320px;
    height: 560px;
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

export const Title = styled("p")`
  color: #fff;
  margin: 2rem 0 18px 5rem;
  font-size: 1.5rem;
  position: relative;
  top: 70px;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    top: 70px;
    margin: 2rem 0 18px 3.5rem;
  }
  @media only screen and (min-width: 1250px) {
    // width: 350px;
    // font-size: 1.7rem;
  }
  @media only screen and (min-width: 1400px) {
    width: 350px;
    font-size: 1.7rem;
    margin: 2rem 0 18px 5rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 350px;
    font-size: 1.7rem;
  }
`;
export const SliderContainer = styled("div")`
  max-width: 1450px;
  width: 100%;
  padding: 0 2rem;
  @media only screen and (min-width: 1400px) {
    width: 90%;
  }
  @media only screen and (min-width: 1500px) {
    width: 100%;
  }
  @media only screen and (min-width: 1600px) {
    width: 100%;
  }
`;

export const ViewAllBTN = styled("span")`
  color: #ffb642;
  margin: 1rem 6rem 1rem 2rem;
  position: relative;
  z-index: 7;
  top: 120px;
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    top: 100px;
    margin: 1rem 2rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 1.1rem;
    margin: 1rem 0 1rem 0;
  }
  @media only screen and (min-width: 1400px) {
    margin: 1rem 6rem 1rem 2rem;
  }
  @media only screen and (min-width: 1500px) {
    margin: 1rem 4rem 1rem 2rem;
  }
  @media only screen and (min-width: 1500px) {
    margin: 1rem 2rem 1rem 2rem;
  }
`;

export const ArrowBTN = styled("button")`
   cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 1%;
        opacity: disabled ? 0 : 1;
        user-select: none;
        // height: 55px;
        // width: 55px;
        // border-radius: 27px;
        // border: none;
        // background-color: rgba(0,0,0,0.7);
        // font-size: 2rem;
        // color: #fff;
        // text-align: center;
        // padding: 0px 1rem;
        // position: relative;
        // top: 50px;
        // left: 1px;
`;

export const NFTLabel = styled("span")`
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
