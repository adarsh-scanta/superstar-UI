import React from "react";
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";
import { SvgIcon } from "../../common/SvgIcon";
import { toast } from "react-toastify";

function TowFactor({ openTab }) {

  const notify = () =>
    toast.error("🦄 No Data");

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
                Two-factor authentication
              </span>
            </Col>
          </Row>
        </div>
        <Row justify="space-between">
          <Col span={18}>
            <Form
              layout="vertical"
              name="basic"
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div style={{ width: "100%", height: "250px" }}></div>
              <Row justify="end">
                <Col>
                  <CancelButton onClick={notify}>
                    <span
                      style={{
                        margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Cancel
                    </span>
                  </CancelButton>
                </Col>
                <Col>
                  <SaveButton>
                    <span
                      style={{
                        margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        color: "#020202",
                      }}
                    >
                      Save Changes
                    </span>
                  </SaveButton>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TowFactor;
