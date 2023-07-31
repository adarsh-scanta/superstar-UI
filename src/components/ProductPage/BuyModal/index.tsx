import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import "./index.css";
interface dataFormProps {
  productData;
}

function BuyModal({ productData }: dataFormProps) {
  const dispatch = useDispatch();

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET
  );

  const [clientSecret, setClientSecret] = useState("");
  const [mutezToInrRate, setmutezToInrRate] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const getConvertRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=inr-indian-rupee&amount=1"
    );
    console.log(rate.data.price);
    setmutezToInrRate(rate.data.price);
  };

  const handleRetry = async () => {
    setLoading(true);
    console.log("retry");
    await fetchIntent();
    setLoading(false);
  };

  const fetchIntent = async () => {
    if (mutezToInrRate != 0) {
      try {
        fetch(
          `${process.env.REACT_APP_BASE_URL}/funding/pay`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem(
                "Authorization-token"
              )}`,
            },
            body: JSON.stringify({
              user_id: `${JSON.parse(localStorage.getItem("user-data")).id}`,
              user_address: `${JSON.parse(localStorage.getItem("user-data")).pkh
                }`,
              nft: {
                id: productData?.nftID,
                name: productData?.name,
                price: (
                  (parseInt(productData?.value?.price) / 1000000) *
                  mutezToInrRate
                ).toFixed(2),
              },
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("payment intent", data);

            if (data.clientSecret) {
              setClientSecret(data.clientSecret);
              setErrorMsg("");
            } else {
              setErrorMsg("Please try after some time.");
            }
          })

          .catch((err) => {
            toast.error("Stripe (" + err?.message + ")");
          });
      } catch (e) { }
    }
  };

  useEffect(() => {
    getConvertRate();
  }, []);
  useEffect(() => {
    fetchIntent();
  }, [mutezToInrRate]);

  // const appearance = {
  //   theme: "stripe",
  // };
  const options = {
    clientSecret,
    // appearance,
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify="center">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <img
            src={productData?.thumbnail}
            width="90%"
            // height="90%"
            style={{ marginTop: "1rem", maxWidth: "200px" }}
          />{" "}
          <p style={{ marginBottom: "0", color: "#fff", marginTop: "1rem" }}>
            {productData?.name}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#fff" }}>
            ₹{" "}
            {(
              (parseInt(productData?.value?.price) / 1000000) *
              mutezToInrRate
            ).toFixed(2)}
          </p>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm productData={productData} />
            </Elements>
          )}
          {errorMsg === "Please try after some time." && (
            <>
              <Row justify="center">
                <p style={{ color: "#fff" }}>Please try after some time.</p>
              </Row>
              <Row justify="center">
                <Button
                  onClick={handleRetry}
                  loading={loading}
                  style={{
                    padding: "0.3rem 1.5rem",
                    background:
                      "linear-gradient(180deg, #ffbe55 21.15%, #ffac27 100%)",
                    boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                    border: "none",
                    color: "#020202",
                  }}
                >
                  Retry
                </Button>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default BuyModal;
