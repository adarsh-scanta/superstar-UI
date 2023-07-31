import React from 'react'
import {Row, Col} from 'antd';

function index() {
  return (
    <div>
      {" "}
      <Row>
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3162_8044)">
            <circle r="25" transform="matrix(-1 0 0 1 45 45)" fill="#FFB743" />
          </g>
          <circle r="25" transform="matrix(-1 0 0 1 45 45)" fill="#FFB743" />
          <path
            d="M49.464 54.8857C49.3022 54.9698 49.1206 55.0083 48.9386 54.997C48.7566 54.9858 48.5811 54.9251 48.431 54.8217L35.431 45.8217C35.2982 45.7296 35.1896 45.6068 35.1146 45.4636C35.0397 45.3205 35.0005 45.1613 35.0005 44.9997C35.0005 44.8381 35.0397 44.6789 35.1146 44.5357C35.1896 44.3925 35.2982 44.2697 35.431 44.1777L48.431 35.1777C48.581 35.0739 48.7566 35.0131 48.9387 35.0019C49.1208 34.9907 49.3025 35.0295 49.4641 35.1142C49.6257 35.1989 49.761 35.3261 49.8555 35.4822C49.95 35.6383 49.9999 35.8172 50 35.9997V53.9997C50 54.1822 49.9501 54.3613 49.8556 54.5174C49.7611 54.6736 49.6257 54.801 49.464 54.8857Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_3162_8044"
              x="0"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_3162_8044"
              />
            </filter>
          </defs>
        </svg>
      </Row>
    </div>
  );
}

export default index