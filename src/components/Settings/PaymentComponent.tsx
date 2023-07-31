import React, { lazy, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col, Modal } from "antd";
// import MissionContent from "../../content/MissionContent.json";
import CardModal from "./CardModal";
const Container = lazy(() => import("../../common/Container"));
const PaymentComponent = () => {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const handleCardCancel = () => {
    setIsCardModalVisible(false);
  };
  const showCardModal = () => {
    setIsCardModalVisible(true);
  };

  return (<></>
    // <div style={{ padding: "3rem" }}>
    //   <Row>
    //     <Col span={18}>
    //       <p
    //         style={{
    //           color: "white",
    //           fontSize: "1.4rem",
    //           fontWeight: "bold",
    //           marginBottom: "0",
    //         }}
    //       >
    //         CREDIT / DEBIT CARDS
    //       </p>
    //       <Row>
    //         <Col span={12}>
    //           <div
    //             style={{
    //               background:
    //                 "linear-gradient(180deg, #3B3F5A 0%, rgba(59, 63, 90, 0) 100%)",
    //               width: "100%",
    //               height: "60px",
    //               borderRadius: "6px",
    //               fontSize: "1.2rem",
    //               //   fontWeight: "bold",
    //             }}
    //           >
    //             <span style={{ padding: "0.5rem" }}>
    //               <img src="/img/svg/cardIcon.svg" />
    //             </span>{" "}
    //             No Credit Card Linked
    //           </div>
    //         </Col>
    //         <Col span={6}>
    //           <button
    //             style={{
    //               background:
    //                 "linear-gradient(180deg, #FFBE55 23.75%, #FFAC27 89.9%)",
    //               boxShadow: "-3px 0px 4px rgba(0, 0, 0, 0.25)",
    //               borderRadius: "5px",
    //               margin: "0 0.5rem",
    //               padding: "0.5rem",
    //               fontSize: "1.2rem",
    //               fontWeight: "bold",
    //               color: "#020202",
    //               border:"none"
    //             }}
    //             onClick={showCardModal}
    //           >
    //             Link Card
    //           </button>
    //           <Modal
    //             style={{
    //               margin: "0",
    //               padding: "0",
    //               borderRadius: "12px",
    //               border: "1px solid #fff",
    //               overflow: "hidden",
    //             }}
    //             className="modalStyle"
    //             centered={true}
    //             closable={false}
    //             width={700}
    //             visible={isCardModalVisible}
    //             footer={null}
    //             cancelButtonProps={{ style: { display: "none" } }}
    //             okButtonProps={{ style: { display: "none" } }}
    //             onCancel={handleCardCancel}
    //             bodyStyle={{ background: "#121825" }}
    //           >
    //             <CardModal
    //             // handleLogin={handleLogin}
    //             />
    //           </Modal>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={24}>
    //       <p
    //         style={{
    //           color: "white",
    //           fontSize: "1.4rem",
    //           fontWeight: "bold",
    //           marginBottom: "0",
    //           marginTop: "4rem",
    //         }}
    //       >
    //         PREPAID CRYPTO BALANCE
    //       </p>
    //       <Row justify="start">
    //         <Col>
    //           <div
    //             style={{
    //               margin: "0 1rem",
    //               height: "200px",
    //               width: "250px",
    //               background:
    //                 "linear-gradient(180deg, #3B3F5A 0%, rgba(59, 63, 90, 0) 100%)",
    //               borderRadius: "6px",
    //             }}
    //           >
    //             <Row>
    //               <span style={{ fontSize: "1.2rem", margin: "1rem 2rem" }}>
    //                 Prepaid Tezos Balance
    //               </span>
    //             </Row>
    //             <Row>
    //               <span
    //                 style={{
    //                   fontSize: "1.8rem",
    //                   fontWeight: "bold",
    //                   margin: "1rem auto",
    //                 }}
    //               >
    //                 0 XTZ
    //               </span>
    //             </Row>
    //             <Row>
    //               <button
    //                 style={{
    //                   fontSize: "1.2rem",
    //                   margin: "1rem auto",
    //                   border: "1px solid #FFBE55",
    //                   boxSizing: "border-box",
    //                   filter: "drop-shadow(-3px 0px 4px rgba(0, 0, 0, 0.25))",
    //                   borderRadius: "5px",
    //                   background: "transparent",
    //                 }}
    //               >
    //                 Setup
    //               </button>
    //             </Row>
    //           </div>
    //         </Col>
    //         {/* <Col>
    //           <div
    //             style={{
    //               margin: "0 1rem",
    //               height: "200px",
    //               width: "250px",
    //               background:
    //                 "linear-gradient(180deg, #3B3F5A 0%, rgba(59, 63, 90, 0) 100%)",
    //               borderRadius: "6px",
    //             }}
    //           >
    //             <Row>
    //               <span style={{ fontSize: "1.2rem", margin: "1rem auto" }}>
    //                 Prepaid BTC Balance
    //               </span>
    //             </Row>
    //             <Row>
    //               <span
    //                 style={{
    //                   fontSize: "1.8rem",
    //                   fontWeight: "bold",
    //                   margin: "1rem auto",
    //                 }}
    //               >
    //                 0 BTC
    //               </span>
    //             </Row>
    //             <Row>
    //               <button
    //                 style={{
    //                   fontSize: "1.2rem",
    //                   margin: "1rem auto",
    //                   border: "1px solid #FFBE55",
    //                   boxSizing: "border-box",
    //                   filter: "drop-shadow(-3px 0px 4px rgba(0, 0, 0, 0.25))",
    //                   borderRadius: "5px",
    //                   background: "transparent",
    //                 }}
    //               >
    //                 Setup
    //               </button>
    //             </Row>
    //           </div>
    //         </Col>
    //         <Col>
    //           <div
    //             style={{
    //               margin: "0 1rem",
    //               height: "200px",
    //               width: "250px",
    //               background:
    //                 "linear-gradient(180deg, #3B3F5A 0%, rgba(59, 63, 90, 0) 100%)",
    //               borderRadius: "6px",
    //             }}
    //           >
    //             <Row>
    //               <span style={{ fontSize: "1.2rem", margin: "1rem 2rem" }}>
    //                 Prepaid ETH Balance
    //               </span>
    //             </Row>
    //             <Row>
    //               <span
    //                 style={{
    //                   fontSize: "1.8rem",
    //                   fontWeight: "bold",
    //                   margin: "1rem auto",
    //                 }}
    //               >
    //                 0 ETH
    //               </span>
    //             </Row>
    //             <Row>
    //               <button
    //                 style={{
    //                   fontSize: "1.2rem",
    //                   margin: "1rem auto",
    //                   border: "1px solid #FFBE55",
    //                   boxSizing: "border-box",
    //                   filter: "drop-shadow(-3px 0px 4px rgba(0, 0, 0, 0.25))",
    //                   borderRadius: "5px",
    //                   background: "transparent",
    //                 }}
    //               >
    //                 Setup
    //               </button>
    //             </Row>
    //           </div>
    //         </Col> */}
    //       </Row>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default PaymentComponent;
