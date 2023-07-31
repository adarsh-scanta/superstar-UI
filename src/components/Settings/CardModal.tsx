import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { LOGIN } from "../../redux/Login/Login.types";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";

function CardModal() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const handleLoginButtonClick = () => {
    dispatch({ type: LOGIN, payload: true });
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify="center">
        <Col span={24}>
          <Row justify="center"><p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>Add a Credit Card</p></Row>
          <Row ><p style={{
            fontSize: "1.3rem", color: "#fff", marginBottom: "0", margin: "0 1rem",
          }}>Name (As it appears on your card)</p></Row>
          <Row >
            <Input
              style={{
                margin: "1rem",
                border: "1px solid #FFFFFF",
                padding: "1rem",
                boxSizing: "border-box",
                borderRadius: "6px",
                background: "#232B38"
              }} />
          </Row>
          <Row >
            <Input
              placeholder="Enter Card Details"
              style={{
                margin: "1rem",
                border: "1px solid #FFFFFF",
                padding: "1rem",
                boxSizing: "border-box",
                borderRadius: "6px",
                background: "#232B38"
              }} />
          </Row>

          <Row justify="space-around"><Col span={6}>
          <p style={{color: "#fff", marginBottom: "0"}}>Country</p><Input
          style={{
          margin: "1rem",
          border: "1px solid #FFFFFF",
          padding: "1rem",
          boxSizing: "border-box",
          borderRadius: "6px",
          background: "#232B38"
        }} />
          </Col><Col span={14}><p style={{ color: "#fff", marginBottom: "0" }}>Postal Code</p><Input
          style={{
            margin: "1rem",
            border: "1px solid #FFFFFF",
            padding: "1rem",
            boxSizing: "border-box",
            borderRadius: "6px",
            background: "#232B38"
          }} />
        </Col>

      </Row>

      <Row justify="end"><SaveButton>
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
      </SaveButton></Row>
    </Col>
      </Row >

    </div >
  );
}

export default CardModal;
