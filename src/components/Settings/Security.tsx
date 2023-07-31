import React from 'react'
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
import {
  CancelButton,
  SaveButton,
  SecurityButton,
  // CustomCheckbox,
} from "./Styles";

function Security({openTab}) {
  return (
    <div style={{ margin: "4rem" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <SecurityButton onClick={() => openTab("changePass")}>
            Update Password
          </SecurityButton>
        </li>
        {/* <li>
          <SecurityButton onClick={() => openTab("twoFactor")} disabled={true}>
            Two-factor authentication
          </SecurityButton>
        </li>
        <li>
          <SecurityButton onClick={() => openTab("listDevice")} disabled={true}>
            Logged-In devices
          </SecurityButton>
        </li> */}
      </ul>
    </div>
  );
}

export default Security
