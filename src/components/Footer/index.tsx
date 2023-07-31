import React, { useState } from "react";
import { Row, Col, Input, Modal, Button } from "antd";
import { withTranslation } from "react-i18next";
import HelpModal from "./HelpModal";
import { Link } from "react-router-dom";
import Container from "../../common/Container";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FooterSection, LogoContainer, CTAButton, PP } from "./styles";
import { ADD_TO_NEWSLETTER } from "../../redux/Dashboard/Dashboard.types";
const Footer = ({ t }: any) => {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = useState("");
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleHelpModal = () => {
    setIsHelpModalVisible(!isHelpModalVisible);
  };
  const handleSend = () => {
    setLoading(true);
    if (emailInput.length > 5) {
      dispatch({
        type: ADD_TO_NEWSLETTER,
        payload: {
          email: emailInput,
        },
      });
    } else {
      toast.error("Please provide a valid email!");
    }
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  };

  return (
    <>
      <FooterSection style={{ alignItems: "center", justifyContent: "center" }}>
        <Container>
          <div style={{ marginTop: "10px" }}>
            <Row justify="center">
              {/* <div style={{ width: "300px", margin: "0 0 1.5rem" }}>
                <Search
                  placeholder="Email address"
                  allowClear
                  enterButton="Subscribe"
                  size="large"
                  // onSearch={}
                />
              </div> */}
            </Row>
            <Row justify="center">
              <Col>
                <LogoContainer>
                  <Link to="/" aria-label="/">
                    <svg
                      width="180"
                      height="96"
                      viewBox="0 0 208 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_1318_1098)">
                        <path
                          d="M12.566 57.6252C11.0643 57.6252 9.70651 57.368 8.49276 56.8537C7.29957 56.3394 6.35326 55.5988 5.6538 54.6319C4.95435 53.6651 4.59434 52.5233 4.57377 51.2067H9.20249C9.26421 52.0913 9.57279 52.7907 10.1282 53.305C10.7043 53.8193 11.486 54.0765 12.4735 54.0765C13.4815 54.0765 14.2735 53.8399 14.8495 53.3668C15.4256 52.873 15.7136 52.2353 15.7136 51.4536C15.7136 50.8158 15.5181 50.2912 15.1273 49.8798C14.7364 49.4683 14.2427 49.1495 13.6461 48.9232C13.0701 48.6763 12.2677 48.4089 11.2391 48.1209C9.84023 47.7094 8.69848 47.3083 7.81388 46.9174C6.94985 46.506 6.19896 45.8991 5.56123 45.0968C4.94407 44.2739 4.63548 43.1836 4.63548 41.8258C4.63548 40.5503 4.95435 39.4394 5.59209 38.4931C6.22982 37.5468 7.12471 36.8268 8.27675 36.333C9.42879 35.8187 10.7454 35.5616 12.2266 35.5616C14.4484 35.5616 16.2484 36.1067 17.6268 37.1971C19.0257 38.2668 19.7971 39.7686 19.9411 41.7024H15.189C15.1478 40.9618 14.829 40.3549 14.2324 39.8817C13.6564 39.388 12.8849 39.1411 11.918 39.1411C11.0746 39.1411 10.3957 39.3571 9.88137 39.7892C9.38764 40.2212 9.14078 40.8486 9.14078 41.6715C9.14078 42.2475 9.32593 42.731 9.69623 43.1218C10.0871 43.4921 10.5603 43.8007 11.1157 44.0476C11.6917 44.2739 12.494 44.5413 13.5226 44.8499C14.9215 45.2613 16.0633 45.6728 16.9479 46.0842C17.8325 46.4957 18.5937 47.1128 19.2314 47.9357C19.8691 48.7586 20.188 49.8386 20.188 51.1758C20.188 52.3279 19.8897 53.3976 19.2931 54.3851C18.6965 55.3725 17.8222 56.1646 16.6702 56.7612C15.5181 57.3372 14.1501 57.6252 12.566 57.6252ZM40.0722 40.3137V57.4092H35.7212V55.2491C35.1658 55.9897 34.4355 56.576 33.5303 57.008C32.6457 57.4195 31.6788 57.6252 30.6296 57.6252C29.2925 57.6252 28.1096 57.3475 27.081 56.792C26.0523 56.216 25.2397 55.3828 24.6432 54.2925C24.0671 53.1816 23.7791 51.865 23.7791 50.3427V40.3137H28.0993V49.7255C28.0993 51.0833 28.4387 52.1324 29.1176 52.873C29.7965 53.5931 30.7222 53.9531 31.8948 53.9531C33.088 53.9531 34.024 53.5931 34.7029 52.873C35.3818 52.1324 35.7212 51.0833 35.7212 49.7255V40.3137H40.0722ZM48.6549 42.7824C49.2104 42.0007 49.9715 41.3526 50.9384 40.8383C51.9259 40.3035 53.0471 40.036 54.302 40.036C55.7626 40.036 57.0792 40.396 58.2518 41.1161C59.445 41.8361 60.381 42.8647 61.0599 44.2019C61.7594 45.5185 62.1091 47.0511 62.1091 48.7997C62.1091 50.5484 61.7594 52.1016 61.0599 53.4593C60.381 54.7965 59.445 55.8354 58.2518 56.576C57.0792 57.3166 55.7626 57.6869 54.302 57.6869C53.0471 57.6869 51.9362 57.4298 50.9693 56.9154C50.023 56.4011 49.2515 55.7531 48.6549 54.9714V65.5557H44.3348V40.3137H48.6549V42.7824ZM57.6964 48.7997C57.6964 47.7711 57.4804 46.8865 57.0483 46.1459C56.6369 45.3848 56.0815 44.8088 55.382 44.4179C54.7031 44.027 53.9625 43.8316 53.1602 43.8316C52.3785 43.8316 51.6379 44.0373 50.9384 44.4487C50.2595 44.8396 49.7041 45.4156 49.2721 46.1768C48.8606 46.938 48.6549 47.8329 48.6549 48.8615C48.6549 49.8901 48.8606 50.785 49.2721 51.5461C49.7041 52.3073 50.2595 52.8936 50.9384 53.305C51.6379 53.6959 52.3785 53.8913 53.1602 53.8913C53.9625 53.8913 54.7031 53.6856 55.382 53.2742C56.0815 52.8627 56.6369 52.2764 57.0483 51.5153C57.4804 50.7541 57.6964 49.8489 57.6964 48.7997ZM81.1404 48.4912C81.1404 49.1083 81.0992 49.6638 81.017 50.1575H68.5194C68.6223 51.3918 69.0543 52.3587 69.8154 53.0582C70.5766 53.7576 71.5126 54.1074 72.6235 54.1074C74.2282 54.1074 75.3699 53.4182 76.0488 52.0399H80.7084C80.2146 53.6856 79.2683 55.0434 77.8694 56.1131C76.4705 57.1623 74.7527 57.6869 72.7161 57.6869C71.0703 57.6869 69.5891 57.3269 68.2725 56.6069C66.9765 55.8663 65.9582 54.8274 65.2176 53.4902C64.4975 52.153 64.1375 50.6101 64.1375 48.8615C64.1375 47.0923 64.4975 45.5391 65.2176 44.2019C65.9376 42.8647 66.9456 41.8361 68.2417 41.1161C69.5377 40.396 71.0292 40.036 72.7161 40.036C74.3413 40.036 75.7916 40.3857 77.0671 41.0852C78.3632 41.7847 79.3609 42.7824 80.0604 44.0784C80.7804 45.3539 81.1404 46.8248 81.1404 48.4912ZM76.666 47.2568C76.6454 46.1459 76.2442 45.2613 75.4625 44.603C74.6807 43.9242 73.7241 43.5847 72.5927 43.5847C71.5229 43.5847 70.6177 43.9139 69.8772 44.5722C69.1571 45.2099 68.7148 46.1048 68.5502 47.2568H76.666ZM88.6139 42.9676C89.1693 42.0624 89.8893 41.3526 90.7739 40.8383C91.6791 40.324 92.7077 40.0669 93.8597 40.0669V44.603H92.718C91.3602 44.603 90.3316 44.9219 89.6322 45.5596C88.9533 46.1974 88.6139 47.3083 88.6139 48.8923V57.4092H84.2937V40.3137H88.6139V42.9676ZM103.312 57.6869C101.913 57.6869 100.658 57.44 99.5468 56.9463C98.4359 56.432 97.5513 55.7428 96.893 54.8788C96.2553 54.0148 95.9056 53.0582 95.8438 52.009H100.195C100.277 52.6673 100.596 53.2125 101.151 53.6445C101.727 54.0765 102.437 54.2925 103.281 54.2925C104.104 54.2925 104.741 54.1279 105.194 53.7988C105.667 53.4696 105.904 53.0479 105.904 52.5336C105.904 51.9781 105.616 51.5667 105.04 51.2993C104.484 51.0112 103.589 50.7027 102.355 50.3735C101.079 50.0649 100.03 49.7461 99.2074 49.4169C98.4051 49.0878 97.7056 48.5837 97.109 47.9049C96.533 47.226 96.245 46.3105 96.245 45.1585C96.245 44.2122 96.5124 43.3481 97.0473 42.5664C97.6028 41.7847 98.3845 41.1675 99.3925 40.7149C100.421 40.2623 101.625 40.036 103.003 40.036C105.04 40.036 106.665 40.5503 107.879 41.5789C109.092 42.587 109.761 43.955 109.884 45.6831H105.749C105.688 45.0042 105.4 44.4693 104.885 44.0784C104.392 43.667 103.723 43.4613 102.88 43.4613C102.098 43.4613 101.491 43.6053 101.059 43.8933C100.647 44.1813 100.442 44.5825 100.442 45.0968C100.442 45.6728 100.73 46.1151 101.306 46.4237C101.882 46.7117 102.777 47.01 103.99 47.3186C105.225 47.6271 106.243 47.946 107.045 48.2752C107.848 48.6043 108.537 49.1186 109.113 49.8181C109.709 50.4969 110.018 51.4021 110.039 52.5336C110.039 53.521 109.761 54.4056 109.205 55.1874C108.671 55.9691 107.889 56.5863 106.86 57.0389C105.852 57.4709 104.669 57.6869 103.312 57.6869ZM118.615 43.8624V52.1324C118.615 52.7084 118.748 53.1302 119.016 53.3976C119.304 53.6445 119.777 53.7679 120.435 53.7679H122.441V57.4092H119.726C116.084 57.4092 114.264 55.64 114.264 52.1016V43.8624H112.227V40.3137H114.264V36.0862H118.615V40.3137H122.441V43.8624H118.615ZM124.438 48.7997C124.438 47.0717 124.777 45.5391 125.456 44.2019C126.155 42.8647 127.091 41.8361 128.264 41.1161C129.457 40.396 130.784 40.036 132.245 40.036C133.52 40.036 134.631 40.2932 135.577 40.8075C136.544 41.3218 137.316 41.9698 137.892 42.7515V40.3137H142.243V57.4092H137.892V54.9097C137.336 55.712 136.565 56.3806 135.577 56.9154C134.61 57.4298 133.489 57.6869 132.214 57.6869C130.774 57.6869 129.457 57.3166 128.264 56.576C127.091 55.8354 126.155 54.7965 125.456 53.4593C124.777 52.1016 124.438 50.5484 124.438 48.7997ZM137.892 48.8615C137.892 47.8123 137.686 46.9174 137.275 46.1768C136.863 45.4156 136.308 44.8396 135.608 44.4487C134.909 44.0373 134.158 43.8316 133.356 43.8316C132.553 43.8316 131.813 44.027 131.134 44.4179C130.455 44.8088 129.899 45.3848 129.467 46.1459C129.056 46.8865 128.85 47.7711 128.85 48.7997C128.85 49.8284 129.056 50.7335 129.467 51.5153C129.899 52.2764 130.455 52.8627 131.134 53.2742C131.833 53.6856 132.574 53.8913 133.356 53.8913C134.158 53.8913 134.909 53.6959 135.608 53.305C136.308 52.8936 136.863 52.3176 137.275 51.577C137.686 50.8158 137.892 49.9106 137.892 48.8615ZM150.782 42.9676C151.338 42.0624 152.058 41.3526 152.942 40.8383C153.847 40.324 154.876 40.0669 156.028 40.0669V44.603H154.886C153.529 44.603 152.5 44.9219 151.801 45.5596C151.122 46.1974 150.782 47.3083 150.782 48.8923V57.4092H146.462V40.3137H150.782V42.9676Z"
                          fill="white"
                        />
                        <path
                          d="M63.6139 72.122L68.6236 80.2686H66.2124L62.303 73.9011L58.5809 80.2686H56.2165L61.2027 72.122L56.1931 63.952H58.5809L62.5137 70.3429L66.2592 63.952H68.647L63.6139 72.122ZM70.6859 73.8309C70.6859 72.5044 70.9512 71.3495 71.4818 70.3663C72.0124 69.3675 72.7459 68.5949 73.6823 68.0487C74.6343 67.5025 75.7189 67.2294 76.9362 67.2294C78.5125 67.2294 79.8078 67.6117 80.8222 68.3764C81.8523 69.1412 82.5311 70.2024 82.8589 71.5602H80.5647C80.3462 70.7798 79.9171 70.1634 79.2772 69.7108C78.6529 69.2582 77.8726 69.0319 76.9362 69.0319C75.7189 69.0319 74.7357 69.4533 73.9866 70.296C73.2375 71.1232 72.863 72.3015 72.863 73.8309C72.863 75.3759 73.2375 76.5698 73.9866 77.4126C74.7357 78.2553 75.7189 78.6767 76.9362 78.6767C77.8726 78.6767 78.6529 78.4582 79.2772 78.0212C79.9015 77.5842 80.3306 76.96 80.5647 76.1485H82.8589C82.5155 77.4594 81.8288 78.5128 80.7988 79.3088C79.7688 80.0891 78.4813 80.4792 76.9362 80.4792C75.7189 80.4792 74.6343 80.2061 73.6823 79.6599C72.7459 79.1137 72.0124 78.3412 71.4818 77.3423C70.9512 76.3435 70.6859 75.1731 70.6859 73.8309ZM92.0687 67.206C93.0363 67.206 93.9103 67.4167 94.6906 67.838C95.4709 68.2438 96.0796 68.8602 96.5166 69.6874C96.9692 70.5145 97.1955 71.5211 97.1955 72.7072V80.2686H95.0886V73.0116C95.0886 71.7318 94.7687 70.7564 94.1288 70.0854C93.4889 69.3987 92.615 69.0553 91.5069 69.0553C90.3832 69.0553 89.4859 69.4065 88.8148 70.1088C88.1593 70.8111 87.8316 71.8333 87.8316 73.1754V80.2686H85.7013V62.9454H87.8316V69.266C88.253 68.6105 88.8304 68.1033 89.5639 67.7444C90.313 67.3854 91.148 67.206 92.0687 67.206ZM99.8793 73.8075C99.8793 72.4965 100.145 71.3495 100.675 70.3663C101.206 69.3675 101.932 68.5949 102.852 68.0487C103.789 67.5025 104.827 67.2294 105.966 67.2294C107.09 67.2294 108.065 67.4713 108.892 67.9551C109.719 68.4389 110.336 69.0475 110.741 69.781V67.4401H112.895V80.2686H110.741V77.8808C110.32 78.6299 109.688 79.2541 108.845 79.7535C108.018 80.2373 107.05 80.4792 105.942 80.4792C104.803 80.4792 103.773 80.1983 102.852 79.6365C101.932 79.0747 101.206 78.2865 100.675 77.2721C100.145 76.2577 99.8793 75.1028 99.8793 73.8075ZM110.741 73.8309C110.741 72.8633 110.546 72.0206 110.156 71.3027C109.766 70.5848 109.235 70.0385 108.564 69.664C107.909 69.2738 107.183 69.0787 106.387 69.0787C105.591 69.0787 104.866 69.266 104.21 69.6406C103.555 70.0151 103.032 70.5614 102.642 71.2792C102.252 71.9971 102.056 72.8399 102.056 73.8075C102.056 74.7907 102.252 75.649 102.642 76.3826C103.032 77.1004 103.555 77.6545 104.21 78.0446C104.866 78.4192 105.591 78.6065 106.387 78.6065C107.183 78.6065 107.909 78.4192 108.564 78.0446C109.235 77.6545 109.766 77.1004 110.156 76.3826C110.546 75.649 110.741 74.7985 110.741 73.8309ZM122.745 67.206C124.306 67.206 125.57 67.682 126.538 68.634C127.505 69.5703 127.989 70.9281 127.989 72.7072V80.2686H125.882V73.0116C125.882 71.7318 125.562 70.7564 124.923 70.0854C124.283 69.3987 123.409 69.0553 122.301 69.0553C121.177 69.0553 120.28 69.4065 119.609 70.1088C118.953 70.8111 118.625 71.8333 118.625 73.1754V80.2686H116.495V67.4401H118.625V69.266C119.047 68.6105 119.616 68.1033 120.334 67.7444C121.068 67.3854 121.871 67.206 122.745 67.206ZM136.76 67.2294C137.868 67.2294 138.835 67.4713 139.662 67.9551C140.505 68.4389 141.129 69.0475 141.535 69.781V67.4401H143.689V80.5495C143.689 81.72 143.439 82.7578 142.94 83.663C142.44 84.5837 141.722 85.3016 140.786 85.8166C139.865 86.3317 138.788 86.5892 137.556 86.5892C135.87 86.5892 134.465 86.1912 133.342 85.3953C132.218 84.5993 131.555 83.5147 131.352 82.1413H133.459C133.693 82.9216 134.177 83.5459 134.91 84.0141C135.644 84.4979 136.526 84.7398 137.556 84.7398C138.726 84.7398 139.678 84.373 140.412 83.6395C141.161 82.906 141.535 81.876 141.535 80.5495V77.8574C141.114 78.6065 140.49 79.2307 139.662 79.7301C138.835 80.2295 137.868 80.4792 136.76 80.4792C135.62 80.4792 134.583 80.1983 133.646 79.6365C132.725 79.0747 132 78.2865 131.469 77.2721C130.938 76.2577 130.673 75.1028 130.673 73.8075C130.673 72.4965 130.938 71.3495 131.469 70.3663C132 69.3675 132.725 68.5949 133.646 68.0487C134.583 67.5025 135.62 67.2294 136.76 67.2294ZM141.535 73.8309C141.535 72.8633 141.34 72.0206 140.95 71.3027C140.56 70.5848 140.029 70.0385 139.358 69.664C138.703 69.2738 137.977 69.0787 137.181 69.0787C136.385 69.0787 135.659 69.266 135.004 69.6406C134.348 70.0151 133.826 70.5614 133.435 71.2792C133.045 71.9971 132.85 72.8399 132.85 73.8075C132.85 74.7907 133.045 75.649 133.435 76.3826C133.826 77.1004 134.348 77.6545 135.004 78.0446C135.659 78.4192 136.385 78.6065 137.181 78.6065C137.977 78.6065 138.703 78.4192 139.358 78.0446C140.029 77.6545 140.56 77.1004 140.95 76.3826C141.34 75.649 141.535 74.7985 141.535 73.8309ZM158.994 73.3627C158.994 73.7685 158.97 74.1977 158.923 74.6502H148.67C148.748 75.9144 149.177 76.9054 149.958 77.6233C150.753 78.3256 151.713 78.6767 152.837 78.6767C153.758 78.6767 154.522 78.466 155.131 78.0446C155.755 77.6077 156.192 77.0302 156.442 76.3123H158.736C158.393 77.5452 157.706 78.5518 156.676 79.3322C155.646 80.0969 154.366 80.4792 152.837 80.4792C151.62 80.4792 150.527 80.2061 149.56 79.6599C148.608 79.1137 147.858 78.3412 147.312 77.3423C146.766 76.3279 146.493 75.1574 146.493 73.8309C146.493 72.5044 146.758 71.3417 147.289 70.3429C147.819 69.344 148.561 68.5793 149.513 68.0487C150.48 67.5025 151.588 67.2294 152.837 67.2294C154.054 67.2294 155.131 67.4947 156.067 68.0253C157.004 68.5559 157.722 69.2894 158.221 70.2258C158.736 71.1466 158.994 72.1922 158.994 73.3627ZM156.793 72.9179C156.793 72.1064 156.614 71.4119 156.255 70.8345C155.896 70.2414 155.404 69.7966 154.78 69.5001C154.171 69.188 153.492 69.0319 152.743 69.0319C151.666 69.0319 150.746 69.3753 149.981 70.0619C149.232 70.7486 148.803 71.7006 148.693 72.9179H156.793Z"
                          fill="#FFAB26"
                        />
                        <path
                          d="M175.409 32.3908L184.733 0L158.327 20.6725L130.689 1.71205L146.317 33.2129L142.394 15.9611L158.336 27.8942L173.252 17.5572L168.79 35.0661L182.829 45.7552L165.263 47.3182L164 72.9161L169.646 52.4094L203.047 51.3513L175.409 32.3908Z"
                          fill="#FFAB26"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1318_1098"
                          x="0.31743"
                          y="0"
                          width="206.985"
                          height="95.1015"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4.2563" />
                          <feGaussianBlur stdDeviation="2.12815" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1318_1098"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1318_1098"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                </LogoContainer>
              </Col>
            </Row>
            <Row justify="center">
              <span style={{ margin: "1rem 0.5rem" }}>
                <a href="https://discord.gg/gNWPBgeZcP" target="_blank">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 71 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_4177_389)">
                      <ellipse
                        cx="35.1967"
                        cy="31.5"
                        rx="31.1967"
                        ry="31.5"
                        fill="#FFBE55"
                      />
                    </g>
                    <g filter="url(#filter1_d_4177_389)">
                      <path
                        d="M40.2343 18.2344C39.905 18.8241 39.6116 19.4331 39.3556 20.0581C36.8402 19.6602 34.2779 19.6602 31.7625 20.0581C31.5065 19.4331 31.213 18.8241 30.8838 18.2344C28.5143 18.6392 26.2108 19.3643 24.0367 20.3896C20.1488 26.0004 18.3856 32.8122 19.063 39.6046C21.5967 41.5093 24.4403 42.962 27.4685 43.8986C28.1581 42.9877 28.7735 42.0231 29.3088 41.0138C28.3208 40.6496 27.3712 40.1887 26.4738 39.6378C26.7199 39.474 26.9527 39.2911 27.1701 39.0907C29.787 40.3512 32.6544 41.0058 35.559 41.0058C38.4637 41.0058 41.3311 40.3512 43.948 39.0907C44.1801 39.2896 44.4122 39.472 44.6443 39.6378C43.742 40.1843 42.7934 40.6503 41.8093 41.0304C42.3224 42.0625 42.9214 43.0497 43.5998 43.9815C46.6243 43.0481 49.463 41.5951 51.9888 39.6875C52.6824 32.8938 50.9178 26.0765 47.0151 20.4725C44.8654 19.426 42.5847 18.6732 40.2343 18.2344ZM30.0548 35.7252C29.2252 35.6656 28.4509 35.287 27.8945 34.6687C27.338 34.0505 27.0428 33.2407 27.0706 32.4094C27.0386 31.577 27.3324 30.7649 27.8896 30.1457C28.4469 29.5265 29.2237 29.1491 30.0548 29.0936C30.886 29.1491 31.6628 29.5265 32.22 30.1457C32.7773 30.7649 33.0711 31.577 33.039 32.4094C33.0711 33.2418 32.7773 34.0539 32.22 34.673C31.6628 35.2922 30.886 35.6697 30.0548 35.7252ZM41.0633 35.7252C40.2336 35.6656 39.4593 35.287 38.9029 34.6687C38.3465 34.0505 38.0512 33.2407 38.079 32.4094C38.047 31.577 38.3408 30.7649 38.8981 30.1457C39.4553 29.5265 40.2321 29.1491 41.0633 29.0936C41.896 29.1449 42.6752 29.5212 43.2334 30.1413C43.7915 30.7614 44.0838 31.5759 44.0475 32.4094C44.0838 33.2429 43.7915 34.0573 43.2334 34.6775C42.6752 35.2976 41.896 35.6738 41.0633 35.7252Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4177_389"
                        x="0"
                        y="0"
                        width="70.3936"
                        height="71"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4177_389"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4177_389"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_4177_389"
                        x="14.9211"
                        y="18.2344"
                        width="41.2153"
                        height="33.75"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4177_389"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4177_389"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </span>
              <span style={{ margin: "1rem 0.5rem" }}>
                <a href="https://twitter.com/superstarxchnge" target="_blank">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 72 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_4177_392)">
                      <ellipse
                        cx="36.1449"
                        cy="31.5"
                        rx="31.1967"
                        ry="31.5"
                        fill="#FFBE55"
                      />
                    </g>
                    <g clipPath="url(#clip0_4177_392)">
                      <g filter="url(#filter1_d_4177_392)">
                        <path
                          d="M47.3249 25.1545C47.3442 25.417 47.3442 25.678 47.3442 25.939C47.3442 33.9265 41.3233 43.1305 30.3198 43.1305C26.9297 43.1305 23.7804 42.139 21.1301 40.417C21.6114 40.4725 22.0749 40.492 22.5756 40.492C25.2689 40.4986 27.8859 39.5892 30.0048 37.9105C28.7561 37.8877 27.5456 37.4717 26.5424 36.7206C25.5391 35.9695 24.7932 34.9209 24.4087 33.721C24.7787 33.7765 25.15 33.814 25.5393 33.814C26.0755 33.814 26.6148 33.739 27.1154 33.6085C25.7602 33.3322 24.5417 32.5905 23.6669 31.5095C22.7921 30.4285 22.3151 29.075 22.3171 27.679V27.604C23.1148 28.0525 24.0403 28.333 25.0208 28.3705C24.1994 27.8194 23.5259 27.0715 23.0604 26.1937C22.5948 25.3158 22.3517 24.3353 22.3527 23.3395C22.3527 22.2175 22.6484 21.1885 23.1668 20.2915C24.6704 22.159 26.5457 23.6868 28.6713 24.776C30.7969 25.8651 33.1253 26.4913 35.5059 26.614C35.4137 26.164 35.3573 25.6975 35.3573 25.2295C35.3569 24.4359 35.5114 23.6501 35.812 22.9169C36.1126 22.1836 36.5533 21.5174 37.109 20.9563C37.6648 20.3952 38.3246 19.9501 39.0507 19.6466C39.7769 19.3431 40.5552 19.1871 41.3411 19.1875C43.0644 19.1875 44.6197 19.9165 45.7131 21.0955C47.0527 20.8339 48.3374 20.3401 49.5102 19.636C49.0636 21.0322 48.1283 22.2162 46.8793 22.966C48.0674 22.8292 49.2286 22.5137 50.3243 22.03C49.5059 23.2347 48.4919 24.291 47.3249 25.1545Z"
                          fill="#F8F8F8"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_4177_392"
                        x="0.948242"
                        y="0"
                        width="70.3933"
                        height="71"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4177_392"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4177_392"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_4177_392"
                        x="17.1301"
                        y="19.1875"
                        width="37.1941"
                        height="31.9453"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4177_392"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4177_392"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_4177_392">
                        <rect
                          width="35.6533"
                          height="36"
                          fill="white"
                          transform="translate(18.3154 13.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </span>
            </Row>
            <Row justify="center">
              <p
                style={{
                  color: " #B2B3CF",
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                }}
              >
                Subscribe to get our Newsletter
              </p>
            </Row>
            <Row justify="center">
              <div style={{ width: "100%", margin: "1rem " }}>
                <Row justify="center">
                  <Col sm={12} lg={12}>
                    <Row justify="end">
                      <Input
                        type="email"
                        onChange={(e) => {
                          setEmailInput(e.target.value);
                        }}
                        placeholder="Your Email"
                        style={{
                          maxWidth: "350px",
                          height: "2.8rem",
                          background: "#202332",
                          border: "2px solid rgba(131, 131, 154, 1)",
                          borderRadius: "35px",
                          margin: "1rem 1rem 0",
                        }}
                      />
                    </Row>
                  </Col>
                  <Col sm={12} lg={8}>
                    <Row justify="start">
                      <Button
                        loading={loading}
                        onClick={handleSend}
                        style={{
                          border: "1px solid #ffbe55",
                          padding: "0.4rem 2rem",
                          marginTop: "1rem",
                          borderRadius: "50px",
                          boxSizing: "border-box",
                          fontSize: "1.3rem",
                          height: "2.8rem",
                          fontWeight: 500,
                          filter:
                            "drop-shadow(0px 3px 6px rgba(248, 187, 90, 0.16))",
                          background:
                            "linear-gradient(180deg, #ffbe55 11.25%, #ffac27 80%)",
                          boxShadow:
                            "0px 4px 30px 10px rgb(255, 190, 85, 0.25)",
                          color: "#020202",
                        }}
                      >
                        Subscribe
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row justify="center">
              <Col>
                <a
                  href="https://super-thumb.s3.amazonaws.com/Privacy+Policy+(1).pdf"
                  target="_blank"
                >
                  <PP> Privacy Policy</PP>
                </a>
              </Col>
              <Col>
                <a
                  href="https://super-thumb.s3.amazonaws.com/Terms+%26+Conditions+(1).pdf"
                  target="_blank"
                >
                  <p
                    style={{
                      color: "#B2B3CF",
                      fontSize: "1.1rem",
                      margin: "1rem 0 1rem",
                      letterSpacing: "1px",
                      padding: "0 1.5rem",
                      borderRight: "1px solid #B2B3b3",
                    }}
                  >
                    {" "}
                    Terms & Conditions
                  </p>
                </a>
              </Col>
              <Col>
                <p
                  style={{
                    color: "#B2B3CF",
                    fontSize: "1.1rem",
                    margin: "1rem 0 1rem",
                    letterSpacing: "1px",
                    padding: "0 1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleHelpModal}
                >
                  Help
                </p>
                <Modal
                  style={{
                    margin: "0",
                    padding: "0",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(180deg, #3B3F5A 0%, #0D1016 100%)",
                    border: "2px solid #121825",
                    overflow: "hidden",
                  }}
                  className="modalStyle"
                  centered={true}
                  closable={true}
                  width={500}
                  visible={isHelpModalVisible}
                  footer={null}
                  cancelButtonProps={{ style: { display: "none" } }}
                  okButtonProps={{ style: { display: "none" } }}
                  onCancel={toggleHelpModal}
                  bodyStyle={{
                    background:
                      "linear-gradient(180deg, #3B3F5A 0%, #0D1016 100%)",
                  }}
                >
                  <HelpModal />
                </Modal>
              </Col>
            </Row>
            <Row justify="center">
              <p
                style={{
                  color: "#B2B3CF",
                  fontSize: "1.1rem",
                  margin: "1rem 1rem 3rem",
                }}
              >
                © 2023 Superstar Xchange Inc
              </p>
            </Row>
          </div>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);