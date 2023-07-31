import { lazy, useState } from "react";
import { Menu, Row, Col } from "antd";
import ScrollToTop from "../../common/ScrollToTop";
import TopBanner from "../../components/Drops/TopBanner";
import DropsAuctionBlock from "../../components/Drops/DropsAuctionBlock";
import DigitalPosterBlock from "../../components/Drops/DigitalPosterBlock";
import MomentsBlock from "../../components/Drops/MomentsBlock";


const Container = lazy(() => import("../../common/Container"));

const DropsPage = () => {
  const sortMenu = (
    <Menu theme="dark">
      <Menu.Item>Low to high</Menu.Item>
      <Menu.Item>High to low</Menu.Item> 
      <Menu.Item>Most Viewed</Menu.Item>
      <Menu.Item>Recently Sold</Menu.Item>
    </Menu>
  );

  const TopBanners = ["3idiotBanner", "2statesBanner"];
  return (
    <>
      <ScrollToTop />
      <TopBanner />
      <Container>
        <DropsAuctionBlock />
        <DigitalPosterBlock />
        <MomentsBlock/>
      </Container>
    </>
  );
};

export default DropsPage;
