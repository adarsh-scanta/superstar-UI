import styled from "styled-components";

export const SettingsContainer = styled("div")`
  width: 100%;
  min-height: 700px;
  background: #121825;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  @media only screen and (max-width: 990px) {
    height: 700px;
  }
  @media only screen and (max-width: 700px) {
    height: 800px;
  }
  @media only screen and (max-width: 650px) {
    height: 1000px;
  }
`; 
