import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MomentsBlock() {
  const momentsData = [
    {
      name: "NFT Name",
      rank: "#1/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#2/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#3/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#4/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#5/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#6/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#7/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#8/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#9/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#10/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#11/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#12/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#13/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#14/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#15/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#16/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#17/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#18/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#19/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#20/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#21/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#22/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#23/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#24/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#25/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#26/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#27/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#28/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#29/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#30/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#31/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#32/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#33/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#34/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#35/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#36/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#37/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#38/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#39/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#40/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#41/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
    {
      name: "NFT Name",
      rank: "#42/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb2.png",
    },

    {
      name: "NFT Name",
      rank: "#43/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb4.png",
    },

    {
      name: "NFT Name",
      rank: "#44/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb6.png",
    },

    {
      name: "NFT Name",
      rank: "#45/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb8.png",
    },

    {
      name: "NFT Name",
      rank: "#46/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb10.png",
    },

    {
      name: "NFT Name",
      rank: "#47/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },

    {
      name: "NFT Name",
      rank: "#48/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },

    {
      name: "NFT Name",
      rank: "#49/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },

    {
      name: "NFT Name",
      rank: "#50/50",
      type: "selling",
      price: 10,
      thumbnail: "thumb12.png",
    },
  ];
  const [momentsCount, setMomentsCount] = useState(10);
  const [momentsToShow, setMomentsToShow] = useState([] as any);

  useEffect(() => {
    const tempData = [] as any;
    momentsData.splice(0, momentsCount).map((data) => {
      tempData.push(data);
    });
    setMomentsToShow(tempData);
  }, [momentsCount]);

  return (
    <div>
      <Row>
        <div style={{ margin: "4rem 0 0" }}>
          <h5
            style={{
              textAlign: "left",
              color: "#F5F9FA",
              fontSize: "2.8rem",
            }}
          >
            Moments
          </h5>
        </div>
      </Row>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="2rem">
          {momentsToShow.length > 0 &&
            momentsToShow.map((data, i) => (
              <Link to="/product?123">
                <div
                  style={{
                    position: "relative",
                    //  height: "90%",
                    //  backgroundImage: `url(/img/icons/marketplace/${data.thumbnail})`
                  }}
                >
                  <img
                    key={i}
                    src={`/img/icons/marketplace/${data.thumbnail}`}
                    style={{ width: "100%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2.2rem",
                      left: "4%",
                      zIndex: 1,
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.name}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.8rem",
                      left: "4%",
                      zIndex: 1,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "rgba(255, 190, 85, 0.8)",
                    }}
                  >
                    {data.rank}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2.2rem",
                      right: "4%",
                      zIndex: 1,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.type === "bidding" ? "Bid at" : "Price"}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.8rem",
                      right: "4%",
                      zIndex: 1,
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    mutez {data.price}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      zIndex: 0.6,
                      height: "150px",
                      width: "100%",
                      background:
                        "linear-gradient(182.93deg, rgba(52, 77, 84, 0) 2.43%, rgba(26, 38, 51, 0.739328) 50.19%, #111927 97.6%)",
                    }}
                  ></div>
                </div>
              </Link>
            ))}
        </Masonry>
      </ResponsiveMasonry>
      <div style={{ margin: "2rem 1rem 0" }}>
        {momentsCount < 50 && (
          <Row justify="center">
            <button
              style={{
                border: "1.28571px solid #F5F9FA",
                padding: "0.5rem 1rem",
                background: "#121825",
                color: "#F8BB5A",
                boxSizing: "border-box",
                borderRadius: "3.85714px",
              }}
              onClick={() => {
                setMomentsCount(momentsCount + 10);
              }}
            >
              View More
            </button>
          </Row>
        )}
      </div>
    </div>
  );
}

export default MomentsBlock;
