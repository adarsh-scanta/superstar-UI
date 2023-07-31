import React, { useState } from "react";
import {
  BannerContainer,
  BannerShadow,
  ButtonsOnBannerContainer,
  ButtonOnBanner,
  ButtonContent,
} from "./styles";
function TopBanner() {
  const [currentBanner, setCurrentBanner] = useState("2statesBanner");

  return (
    <BannerContainer>
      <img
        src={`/img/icons/drops/${currentBanner}.png`}
        style={{ width: "100%", height: "100%", zIndex: 0.6 }}
      />
      <BannerShadow></BannerShadow>
      <ButtonsOnBannerContainer>
        <ButtonOnBanner
          onClick={() => setCurrentBanner("2statesBanner")}
          style={{
            backgroundColor:
              currentBanner === "2statesBanner" ? "#FFAC27" : "#EBEBEB",
          }}
        >
          <ButtonContent>2 State</ButtonContent>
        </ButtonOnBanner>
        <ButtonOnBanner
          onClick={() => setCurrentBanner("3idiotBanner")}
          style={{
            background:
              currentBanner === "3idiotBanner" ? "#FFAC27" : "#EBEBEB",
          }}
        >
          <ButtonContent>3 Idiots</ButtonContent>
        </ButtonOnBanner>
        <ButtonOnBanner
          onClick={() => setCurrentBanner("bahuBanner")}
          style={{
            background: currentBanner === "bahuBanner" ? "#FFAC27" : "#EBEBEB",
          }}
        >
          <ButtonContent>Bahubali</ButtonContent>
        </ButtonOnBanner>
        <ButtonOnBanner
          onClick={() => setCurrentBanner("dangalBanner")}
          style={{
            background:
              currentBanner === "dangalBanner" ? "#FFAC27" : "#EBEBEB",
          }}
        >
          <ButtonContent>Dangal</ButtonContent>
        </ButtonOnBanner>
        <ButtonOnBanner
          onClick={() => setCurrentBanner("bajiraoBanner")}
          style={{
            background:
              currentBanner === "bajiraoBanner" ? "#FFAC27" : "#EBEBEB",
          }}
        >
          <ButtonContent>Bajirao Mastani</ButtonContent>
        </ButtonOnBanner>
      </ButtonsOnBannerContainer>
      {/* </div> */}
    </BannerContainer>
  );
}

export default TopBanner;
