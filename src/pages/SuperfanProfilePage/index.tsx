import { lazy } from "react";
import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import ScrollToTop from "../../common/ScrollToTop";
import { Link } from "react-router-dom";
import Collections from "../../components/SuperfanProfile/Collections";
import { useLastLocation } from "react-router-last-location";
import {
  FollowButton,
  FollowButtonContainer,
  StatsNumber,
  StatsLabel,
  SuperfanName,
  SuperfanID,
  ProfilePicture,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));
const SuperfanProfilePage = () => {
  const lastLocation = useLastLocation();

  return (
    <>
      <ScrollToTop />
      <Container>
        <div 
        id="top"
         style={{ margin: "2rem" }}>
          <Row justify="space-between">
            <Link to="/superfans">
              <SvgIcon src={"backIcon.svg"} width="45px" height="45px" />
            </Link>
            <SvgIcon src={"shareIcon.svg"} width="45px" height="45px" />
          </Row>
          <Row justify="space-between">
            <Col xs={24} sm={24} lg={16} xl={16}>
              <Row>
                <Col xs={24} sm={24} lg={8} xl={8}>
                  <div style={{ margin: "2rem 5rem" }}>
                    <Row justify="center">
                      <ProfilePicture src="/img/icons/superfanProfile/dp.svg" />
                    </Row>
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={16} xl={16}>
                  <div style={{ margin: "1rem" }}>
                    <Row>
                      <Col>
                        <SuperfanName>NFT APLPHA</SuperfanName>
                        <SuperfanID>@nftalpha</SuperfanID>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Row justify="center">
                          <StatsNumber>132</StatsNumber>
                        </Row>
                        <Row justify="center">
                          <StatsLabel>Followers</StatsLabel>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Row justify="center">
                          <StatsNumber>99</StatsNumber>
                        </Row>
                        <Row justify="center">
                          <StatsLabel>Following</StatsLabel>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <div style={{ margin: "0 0.5rem" }}>
                        <span style={{ margin: "0 0.5rem" }}>
                          <img src="/img/icons/superfanProfile/instagram.svg" />
                        </span>
                        <span style={{ margin: "0 0.5rem" }}>
                          <img src="/img/icons/superfanProfile/fb.svg" />
                        </span>
                        <span style={{ margin: "0 0.5rem" }}>
                          <img src="/img/icons/superfanProfile/twitter.svg" />
                        </span>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} lg={8} xl={8}>
              <FollowButtonContainer>
                <FollowButton>Follow</FollowButton>
              </FollowButtonContainer>
            </Col>
          </Row>
        </div>
        <Collections />
      </Container>
    </>
  );
};

export default SuperfanProfilePage;
