import React, { lazy, useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { fetchData } from "../../services/nftServices";
import {
  FETCH_TOKENS,
  BUY_TOKEN,
  FETCH_MARKETPLACE_DATA,
} from "../../redux/Dashboard/Dashboard.types";
import Loading from "../../components/Loader";
const Container = lazy(() => import("../../common/Container"));
const UnderConstruction = () => {
  const dispatch = useDispatch();
  const nftData = useSelector((data: RootState) => data?.dashboard.nftData);
  const marketData = useSelector(
    (data: RootState) => data?.dashboard.marketData
  );

  const [purchasedToken, setPurchasedToken] = useState({
    thumbnail: "",
    mainAsset: "",
    nftID: "",
    name: "",
    token_id: "",
    isActive: "",
  });

  const [realMarketData, setRealMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let tempData = {
      network: "",
      contract: "",
      token_id: "",
      nftID: "",
      level: 0,
      timestamp: "",
      symbol: "",
      name: "",
      decimals: 0,
      artifact_uri: "",
      display_uri: "",
      mainAsset: "",
      thumbnail: "",
      is_transferable: false,
      is_boolean_amount: false,
      should_prefer_symbol: false,
      extras: {
        metadata: "",
      },
      isActive: "",
    };
    tempData =
      realMarketData.length > 0 &&
      realMarketData.filter(
        (item: any) =>
          parseInt(item.key) ===
          parseInt(
            window.location.pathname.split("/")[
              window.location.pathname.split("/").length - 1
            ]
          )
      )[0];

    // console.log(test);
    // tempData.isActive = test.toString();
    setPurchasedToken(tempData);
    // setPurchasedToken({ ...purchasedToken, isActive: test});
  }, [realMarketData]);
  const getDatafromBlock = async () => {
    const res = await fetchData();
    setRealMarketData(res.reverse());
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getDatafromBlock();
  }, []);

  useEffect(() => {
    window.location.search.includes("redirect_status=succeeded") &&
      purchasedToken &&
      purchasedToken.nftID &&
      purchasedToken.isActive &&
      dispatch({
        type: BUY_TOKEN,
        payload: { tokenId: parseInt(purchasedToken?.nftID), quantity: 1 },
      });
  }, [purchasedToken]);

  return (
    <>
      <Loading isLoading={isLoading}>
        <Container> 
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "8rem",
              marginBottom: "4rem",
            }}
          >
            <Row justify="center">
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "500px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Payment Successful!
                </p>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Row justify="center">
                    <img
                      src={
                        purchasedToken?.mainAsset?.includes("http")
                          ? purchasedToken?.mainAsset
                          : "https://superstarxchange.mypinata.cloud/ipfs/" +
                            purchasedToken?.mainAsset?.split("/")[
                              purchasedToken?.mainAsset?.split("/").length - 1
                            ]
                      }
                      style={{ borderRadius: "8px", maxWidth: "300px" }}
                    />
                  </Row>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "1.4rem",
                      margin: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {purchasedToken?.name}
                  </p>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Row justify="center">
                    <p style={{ color: "#fff", fontSize: "1rem" }}>
                      Your collected NFT will reflect in your collection
                      shortly.
                    </p>
                  </Row>
                  <Row>
                    <button
                      style={{
                        margin: "0 auto 2rem",
                        background:
                          "linear-gradient(180deg, #ffbe55 30%, #ffac27 100%)",
                        boxShadow: "-3px 0px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "5px",
                        padding: " 0.5rem",
                        border: "none",
                      }}
                    >
                      <span
                        style={{
                          margin: "0.8rem 1rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#020202",
                        }}
                      >
                        <Link to="/my-collections" style={{ color: "#020202" }}>
                          My collection
                        </Link>
                      </span>
                    </button>
                  </Row>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </Loading>
    </>
  );
};

export default UnderConstruction;
