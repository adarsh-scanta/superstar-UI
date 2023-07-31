import { lazy } from "react";
import SuperfanCard from "../../components/Superfans/SuperfanCard";
import { Row, Col } from "antd";
const Container = lazy(() => import("../../common/Container"));

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const SuperfansPage = () => {
  const tempArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <ScrollToTop />

      <Container>
        <div id="top" />
        <div style={{ margin: "3rem auto", width: "75vw" }}>
          <Row justify="center">
            {tempArr.map((tempItem) => (
              <Col xs={24} sm={24} md={12} lg={8}>
                <SuperfanCard tempItem={tempItem}/>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SuperfansPage;
