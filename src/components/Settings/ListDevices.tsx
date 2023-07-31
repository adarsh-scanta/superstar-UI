import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Switch,
} from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";

function ListDevices({ openTab }) {
  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ margin: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Row justify="space-between">
            <Col>
              <div
                onClick={() => {
                  openTab("security");
                }}
              >
                <SvgIcon src={"backIcon.svg"} width="45px" height="45px" />
              </div>
            </Col>
            <Col>
              <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                Logged -In devices
              </span>
            </Col>
          </Row>
        </div>
        <Row justify="space-between">
          <Col span={18}>
            <ul style={{ listStyle: "none" }}>
              <li style={{ margin: "1rem 0" }}>
                <span style={{ fontSize: "1.2rem" }}>
                  <img src="/img/svg/laptopIcon.svg" /> Desktop-J12UPIN{" "}
                  <span style={{ fontSize: "0.8rem", color: "#FFAB26" }}>
                    (Current Device)
                  </span>
                </span>
              </li>
              <li style={{ margin: "1rem 0" }}>
                <span style={{ fontSize: "1.2rem" }}>
                  <img src="/img/svg/phoneIcon.svg" /> Iphone 13pro
                </span>
              </li>
              <li style={{ margin: "1rem 0" }}>
                <span style={{ fontSize: "1.2rem" }}>
                  <img src="/img/svg/phoneIcon.svg" /> Samsung Note 10
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListDevices;
