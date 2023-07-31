import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { DELETE_ACCOUNT_PERMANENTLY } from "../../redux/Login/Login.types";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";

interface dataFormProps {
  handleDeleteCancel: () => void;
}

function DeleteAccountModal({ handleDeleteCancel }: dataFormProps) {
  const dispatch = useDispatch();
  const userData = useSelector((data: RootState) => data?.login.userData);

  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const handleSave = () => {
    dispatch({
      type: "DELETE_ACCOUNT_PERMANENTLY",
      payload: {
        id: userData.id,
      },
    });
    console.log(userData.id);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify="center">
        <Col span={24}>
          <p style={{ color: "#fff", fontSize: "1.2rem" }}>
            Are you sure you want to delete this account permanently?
          </p>
        </Col>
        <Col span={24}>
          <Row justify="center">
          <CancelButton>
            {/* {console.log("loginData",loginData.user.username)} */}
            <span
              style={{
                margin: "0.8rem 1rem",
                fontSize: "1.2em",
              //   fontWeight: "bold",
                color: "#fff",
              }}
              onClick={handleDeleteCancel}
            >
              Cancel
            </span>
          </CancelButton>
          <SaveButton onClick={handleSave}>
            <span
              style={{
                margin: "0.8rem 1rem",
                fontSize: "1.2em",
                fontWeight: "bold",
                color: "#020202",
              }}
            >
              Confirm
            </span>
          </SaveButton>
          </Row>
          {/* </Col> */}
</Col>
         
      </Row>
    </div>
  );
}

export default DeleteAccountModal;
