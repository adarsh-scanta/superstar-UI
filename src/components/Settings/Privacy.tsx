import React, { useState, useEffect } from "react";
import { Row, Col, Switch, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import DeleteAccountModal from "./DeleteAccountModal";
import {
  GET_USER_DETAILS,
  UPDATE_NOTIFICATION_SETTINGS,
} from "../../redux/Login/Login.types";
import { CancelButton, SaveButton, DeleteButton } from "./Styles";

function Privacy() {
  const dispatch = useDispatch();

  const userData = useSelector((data: RootState) => data?.login.userData);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [dataConsentChecked, setDataConsentChecked] = useState(false);
  const [downloadDataChecked, setdownloadDataPChecked] = useState(false);

  const getUserDetails = () => {
    dispatch({ type: GET_USER_DETAILS, payload: { userId: userData.id } });
  };

  const setDefaultData = () => {
    setDataConsentChecked(Boolean(userData?.data_consent));
    setdownloadDataPChecked(Boolean(userData?.download_data));
  };

  useEffect(() => {
    setDefaultData();
  }, [userData]);

  const handleCancel = () => {
    setDefaultData();
  };

  const handleSave = () => {
    // dispatch({
    //   type: UPDATE_PRIVACY_SETTINGS,
    //   payload: {
    //     bids_and_purchases: String(Number(BandPChecked)),
    //     new_drop_announcements: String(Number(newDropChecked)),
    //     nft_recommendation: String(Number(NFTRecommendChecked)),
    //     news_and_tutorials: String(Number(newsAndTutorialChecked)),
    //   },
    // });
    // getUserDetails();
    console.log(dataConsentChecked, downloadDataChecked);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <div style={{ margin: "4rem" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Row justify="space-between">
            <Col span={12}>
              <p
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "1.4rem",
                  margin: "0.5rem 0 0",
                }}
              >
                Data consent
              </p>
              <p
                style={{
                  color: "#868789",
                  fontSize: "0.8rem",
                }}
              >
                (upon registration for site, request opt-in to have user data
                collected and used; enable opt-out or opt-in here)
              </p>
            </Col>
            <Col span={6}>
              <div style={{ marginTop: "2rem" }}>
                <Switch
                  checked={dataConsentChecked}
                  onChange={() => {
                    setDataConsentChecked(!dataConsentChecked);
                  }}
                />
              </div>
            </Col>
          </Row>
        </li>
        <li>
          <Row justify="space-between">
            <Col span={12}>
              <p
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "1.4rem",
                  margin: "0.5rem 0 0",
                }}
              >
                Download your data
              </p>
              <p
                style={{
                  color: "#868789",
                  fontSize: "0.8rem",
                }}
              >
                (enable users to download data we collect)
              </p>
            </Col>
            <Col span={6}>
              <div style={{ marginTop: "2rem" }}>
                <Switch
                  checked={downloadDataChecked}
                  onChange={() => {
                    setdownloadDataPChecked(!downloadDataChecked);
                  }}
                />
              </div>
            </Col>
          </Row>
        </li>
        <li>
          <DeleteButton
            onClick={() => {
              showDeleteModal();
            }}
          >
            Permanently delete account
          </DeleteButton>
          <Modal
            style={{
              margin: "0",
              padding: "0",
              borderRadius: "12px",
              border: "1px solid #fff",
              overflow: "hidden",
            }}
            className="modalStyle"
            centered={true}
            closable={true}
            width={700}
            visible={isDeleteModalOpen}
            footer={null}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            onCancel={handleDeleteCancel}
            bodyStyle={{ background: "#121825" }}
          >
            <DeleteAccountModal handleDeleteCancel={handleDeleteCancel} />
          </Modal>
        </li>
      </ul>
      <Row justify="end">
        <Col>
          <CancelButton onClick={handleCancel}>
            <span
              style={{
                margin: "0.8rem 1rem",
                fontSize: "1.2em",
                // fontWeight: "bold",
                color: "#fff",
              }}
            >
              Cancel
            </span>
          </CancelButton>
        </Col>
        <Col>
          <SaveButton onClick={handleSave}>
            <span
              style={{
                margin: "0.8rem 1rem",
                fontSize: "1.2em",
                // fontWeight: "bold",
                color: "#020202",
              }}
            >
              Save Changes
            </span>
          </SaveButton>
        </Col>
      </Row>
    </div>
  );
}

export default Privacy;
