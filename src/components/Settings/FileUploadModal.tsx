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

interface dataFormProps {
  handleUploadCancel: () => void;
}

function FileUploadModal({ handleUploadCancel }: dataFormProps) {
  const dispatch = useDispatch(); 
  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify="center">
        <p style={{ color: "#fff", fontSize: "1.5rem" }}>
          Change profile picture
        </p>
        <input
          type="file"
          id="myFile"
          name="filename"
          style={{ backgroundColor: "transparent", color: "#fff" }}
        />
        <CancelButton>
          {/* {console.log("loginData",loginData.user.username)} */}
          <span
            style={{
              margin: "0.8rem 1rem",
              fontSize: "1.2em",
              //   fontWeight: "bold",
              color: "#fff",
            }}
            onClick={handleUploadCancel}
          >
            Cancel
          </span>
        </CancelButton>
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
      </Row>
    </div>
  );
}

export default FileUploadModal;
