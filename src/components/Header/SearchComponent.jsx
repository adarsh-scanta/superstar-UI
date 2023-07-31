import React, { useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

export default function InputAuto({
  pholder,
  data,
  onSelected,
  onChange,
  isLoggedIn,
}) {
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = (e) => {
    setSugesstions(data.filter((i) => i.startsWith(e.target.value)));
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setIsHideSuggs(false);
    setSelectedVal(input);
    onChange(input);
  };

  const hideSuggs = (value) => {
    onSelected(value);
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  return (
    <div className="sugesstion-auto">
      <div className="form-control-auto">
        {/* <input
          placeholder={pholder}
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
          style={{
            backgroundColor: "#232b38",
            border: "1px solid #fff",
            borderRadius: "20px",
            height: "40px",
            position: "relative",
            top: "10px",
          }}
        /> */}
        <Input
          suffix={<SearchOutlined style={{ color: "#fff" }} />}
          placeholder={pholder}
          className="searchBar"
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
          style={{
            backgroundColor: "#232b38",
            border: "1px solid #fff",
            borderRadius: "20px",
            height: "40px",
            position: "relative",
            top: "10px",
            left: isLoggedIn ? "0" : "-20px",
            width: !isLoggedIn && "180px",
          }}
        />
      </div>

      <div
        className="suggestions"
        style={{
          display: isHideSuggs ? "none" : "block",
          position: "absolute",
          backgroundColor: "#232b38",
          borderRadius: "10px",
          minWidth: "300px",
          zIndex: 1000,
        }}
      >
        {suggestions.map((item, idx) => (
          <div
            key={"" + item + idx}
            onClick={() => {
              hideSuggs(item);
            }}
          >
            <Link
              to={`/product/${
                item.split("(")[item.split("(").length - 1].split(")")[0]
              }`}
            >
              <p style={{ color: "#fff", fontSize: "1rem", margin: "0.5rem" }}>
                {item}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
