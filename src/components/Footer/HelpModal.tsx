import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";

function HelpModal() {
  return (
    <div
      style={{
        padding: "4rem",
      }}
    >
      <Row justify="center">
        <Col span={24}>
          <Row justify="center">
            <img src="/img/icons/mailIcon.png" alt="mail" />
          </Row>
          <Row justify="center">
            <p
              style={{
                color: "#fff",
                fontSize: "1rem",
                margin: "1rem 0 0.5rem",
              }}
            >
              Please write to us at
            </p>
          </Row>
          <Row justify="center">
            <a href="mailto:support@superstarxchange.com">
              <p
                style={{
                  color: "#FFB237",
                  fontSize: "1rem",
                  marginBottom: "0",
                }}
              >
                support@superstarxchange.com
              </p>
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HelpModal;
