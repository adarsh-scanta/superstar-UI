import { withTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
import nagraj from "../../assets/nagraj.png";
import {
  CreatorCardComponent,
  CardHead,
  CardSubHeading,
  CratorCardBox,
  CreatorName,
  CreatorDiscription,
} from "./styles";

const CreatorCard = ({ creatorsData }: any) => {
  return (
    <CreatorCardComponent>
      <Row justify="start">
        <Col span={24}>
          <CardHead>Director's Statement</CardHead>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CratorCardBox bordered={false}>
            <Row>
              <Col>
                {creatorsData.map((creatorData: any) => (
                  <div style={{ display: "flex" }}>
                    <div style={{ textAlign: "center", minWidth: "110px" }}>
                      <img
                        src={`/img/icons/creator/${creatorData.image}`}
                        width="70px"
                        height="70px"
                        style={{
                          position: "relative",
                          top: "15px",
                        }}
                      />
                      <CreatorName>{creatorData.name}</CreatorName>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CreatorDiscription>
                        "{creatorData.desc}"
                      </CreatorDiscription>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </CratorCardBox>
        </Col>
      </Row>
    </CreatorCardComponent>
  );
};

export default withTranslation()(CreatorCard);
