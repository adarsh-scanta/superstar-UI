import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  SuperfanCardContainer,
  SuperfanName,
  SuperfanID,
  StatsNumber,
  StatsLabel,
  FollowButton,
} from "./styles";
function SuperfanCard(tempItem: any) {
  return (
    <SuperfanCardContainer>
      <Link to="/superfan-profile?id=123">
        <Row justify="center">
          <img
            src="/img/icons/superfans/fanpic.png"
            width="40%"
            style={{ margin: "1.5rem 0" }}
          />
        </Row>
        <Row justify="center">
          <SuperfanName>Superfan Name</SuperfanName>
        </Row>
        <Row justify="center">
          <SuperfanID>@superfan_ID</SuperfanID>
        </Row>
        <Row justify="center">
          <Col span={12}>
            <div
              style={{
                borderRight: "2px solid rgba(255, 255, 255, 0.5)",
                margin: "0 0 2rem",
              }}
            >
              <Row justify="center">
                <StatsNumber>57</StatsNumber>
              </Row>
              <Row justify="center">
                <StatsLabel>Collections</StatsLabel>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ margin: "0 0 2rem" }}>
              <Row justify="center">
                <StatsNumber>99</StatsNumber>
              </Row>
              <Row justify="center">
                <StatsLabel>Followers</StatsLabel>
              </Row>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <FollowButton>
            <span
              style={{
                color: "#020202",
                fontSize: "1rem",
                fontWeight: "bold",
              }} 
            >
              Follow
            </span>
          </FollowButton>
        </Row>
      </Link>
    </SuperfanCardContainer>
  );
}

export default SuperfanCard;
