import { lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Menu, Row, Col, Dropdown, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ScrollToTop from "../../common/ScrollToTop";
import { FilterContainer } from "./styles";
import _ from "underscore";
// import $ from "jquery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loader";
import { fetchData } from "../../services/nftServices";
import { RootState } from "../../redux/rootReducer";
import { xtzToUsd } from "../../services/nftServices";
import { randomBytes } from "crypto";
import {blogData} from "./data";
import {
  NFTCard,
  NFTLabel,
  RulerContainer,
} from "./styles";
import { ClockCircleOutlined  } from "@ant-design/icons";

const Blog = () => {

  const [loading, setLoading] = useState(false);

 
  return (
    <>
      <ScrollToTop />
      <Loading isLoading={loading}>
        <Row justify="center">
          <div
            style={{ width: "92%", maxWidth: "1400px", margin: "8rem 0 4rem" }}
          >
            <div style={{ minHeight: "100vh" }}>
              <Row justify="center">
                <Col span={21} xl={23}>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                      1200: 4,
                    }}
                  >
                    <Masonry columnsCount={4} gutter="1rem">
                      {blogData.data.length > 0 &&
                        blogData.data.reverse().map((data: any, i: any) => (
                          <a href={data.url} target="_blank">
                            <NFTCard>
                              <a href={data.url} target="_blank">
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "10px",
                                    border: "12px solid #221F20",
                                    height: "100%",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    key={i}
                                    src={data.image}
                                    style={{
                                      width: "100%",
                                      borderRadius: "3px",
                                      height: "62%",
                                    }}
                                  />

                                  <Row>
                                    <NFTLabel
                                      style={{
                                        fontSize: "0.9rem",
                                        color: "#ffb642",
                                      }}
                                    >
                                      {data.creator}
                                    </NFTLabel>
                                  </Row>
                                  <Row>
                                    <NFTLabel
                                      style={{
                                        margin: "0",
                                        fontSize: "0.9rem",
                                      }}
                                    >
                                      {`${data.name.slice(0, 50)}...`}
                                    </NFTLabel>
                                  </Row>
                                  <RulerContainer>
                                    {" "}
                                    <hr
                                      style={{
                                        position: "relative",
                                        top: "8px",
                                        opacity: "0.4",
                                        color: "#FFF",
                                        transform: "scale(1.05, 1)",
                                      }}
                                    />
                                  </RulerContainer>
                                  <Row>
                                    <NFTLabel
                                      style={{
                                        marginTop: "0",
                                        fontSize: "0.9rem",
                                      }}
                                    >
                                      <ClockCircleOutlined />{" "}
                                      {`${data.updated}`}
                                    </NFTLabel>
                                  </Row>
                                </div>
                              </a>
                            </NFTCard>
                          </a>
                        ))}
                    </Masonry>
                  </ResponsiveMasonry>{" "}
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Loading>
    </>
  );
};

export default Blog;
