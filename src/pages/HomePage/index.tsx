import { lazy, useState, useEffect } from "react";
import { Row, Col, Collapse, Modal } from "antd";
import MainBlock from "../../components/Home/MainBlock";
import UpcomingMoviesBlock from "../../components/Home/UpcomingMoviesBlock";
import { useDispatch, useSelector } from "react-redux";
import CustomSlider from "../../components/Home/CustomSlider";
import HowItWorks from "../../components/Home/HowItWorks";
import FaqSection from "../../components/Home/FaqSection";
import PromoModal from "./PromoModal";
import "./index.css";
import {
  FETCH_MARKETPLACE_DATA,
  FETCH_TOKENS,
} from "../../redux/Dashboard/Dashboard.types";
import useWindowDimensions from "./windowDimensionHook";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const dispatch = useDispatch();

  const { Panel } = Collapse;

  const { height, width } = useWindowDimensions();

  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  const closePromoModal = async () => {
    setIsPromoModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPromoModalOpen(true);
    }, 4000);
  }, []);

  useEffect(() => {
    dispatch({
      type: FETCH_TOKENS,
    });
    dispatch({
      type: FETCH_MARKETPLACE_DATA,
    });
  }, []);

  return (
    <>
      <ScrollToTop />

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D1016",
        }}
      >
        <MainBlock />
        {/* <HomeAuctionBlock /> */}
        <CustomSlider />
        <HowItWorks />
        <UpcomingMoviesBlock />
        <Row justify="center">
          <Col span={24}>
            <Row justify="center">
              {" "}
              <div
                style={{
                  width: "80%",
                  minHeight: "90vh",
                  maxWidth: "1450px",
                  margin: "6rem 0 4rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "150px",
                    right: "-6rem",
                    bottom: "-4rem",
                    background: "#00628f",
                    filter: "blur(150px)",
                    zIndex: 5,
                  }}
                ></div>
                <p className="title">FAQs</p>
                <Row justify="center">
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1450px",
                      minHeight: "50vh",
                      margin: "auto",
                    }}
                  >
                    <Row justify="space-between">
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                What is an NFT?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              NFTs or non-fungible tokens are one-of-a-kind
                              digital assets. Almost anything can become an NFT
                              – art, music, collectibles, and even real estate.
                              Because each NFT is assigned a unique
                              identification code and metadata that distinguish
                              it from other tokens, and because it is secured by
                              a decentralized blockchain ledger (e.g. Tezos and
                              Ethereum), purchasing an NFT proves your ownership
                              of the asset you bought. No one can modify the
                              record of ownership or copy/paste a new NFT into
                              existence.
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                Are these NFTs officially licensed? If so, how?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              All NFTs on the Superstar Xchange platform are
                              officially licensed by relevant individuals or
                              organizations that own the underlying intellectual
                              property rights. You can find more details about
                              their licenses and certifications when you
                              evaluate a specific NFT for purchase.{" "}
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                Do I have to buy cryptocurrency in order to use
                                this platform?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              No. As a Superstar Xchange user, you don’t have to
                              buy any cryptocurrency to purchase an NFT. It is
                              your choice whether you pay for your NFT via
                              cryptocurrency or a credit card. If you choose to
                              use a credit card, all cryptocurrency-related
                              transactions are handled on our back-end.{" "}
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.3px",
                                }}
                              >
                                What blockchain are Superstar Xchange’s NFTs
                                minted on?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              All our NFTs are minted on the Tezos blockchain.
                              Tezos is a proof-of-stake blockchain, which
                              consumes a miniscule amount of energy when minting
                              NFTs as compared to other chains. In light of
                              growing public awareness of the ecological impact
                              of NFTs, Tezos has distinguished itself from other
                              networks by providing substantially lower energy
                              consumption and a more environmentally sustainable
                              footprint. Tezos is trusted by big brands such as
                              Redbull, McLaren, Kia, GAP, Ubisoft, and
                              Manchester United for their NFTs.{" "}
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                What can I do with an NFT after buying?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Once you have bought an NFT, you become the unique
                              owner of that NFT. Your authority can be verified
                              using the Tezos blockchain’s public record of
                              transactions. You can flex that NFT among your
                              friends, social circle, and broader social media
                              communities to prove your undivided fandom for
                              special Bollywood properties. Or you can privately
                              bask in the joy of owning your unique piece of
                              Bollywood history without showcasing it to anyone!{" "}
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col span={24} xs={24} lg={18}>
                        <Collapse accordion>
                          <Panel
                            header={
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: "1rem",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                Can I re-sell the NFTs I purchase to others?
                              </span>
                            }
                            key="1"
                          >
                            <p
                              style={{
                                color: "#fff",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              In the coming quarters, we are excited to launch a
                              secondary market that will enable users to gift
                              and re-sell the unique NFTs they have purchased on
                              the Superstar Xchange platform.{" "}
                            </p>
                          </Panel>
                        </Collapse>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      {/* <Modal
        style={{
          margin: "0",
          padding: "0",
          borderRadius: "12px",
          border: "2px solid #121825",
          overflow: "hidden",
        }}
        className="modalStyle"
        centered={true}
        closable={true}
        width={
          width > 1200 ? 800 : width > 990 ? 800 : width > 600 ? 450 : "90%"
        }
        visible={isPromoModalOpen}
        footer={null}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={closePromoModal}
        bodyStyle={{ background: "#232735" }}
      >
        <PromoModal />
      </Modal> */}
    </>
  );
};

export default Home;
