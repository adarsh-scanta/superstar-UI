import React, { useState } from "react";
import Countdown from "react-countdown";
import { Row, Col } from "antd";
import {
  Title,
  TimeCard,
  Number,
  SubText,
  CountDownContainer,
  TimeCardContainer,
} from "./styles";

function FinalCountDown(): any {
  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    var arr = "2022-03-04 16:00:00".split(/[- :]/);
    const difference =
      +new Date(
        parseInt(arr[0]),
        parseInt(arr[1]) - 1,
        parseInt(arr[2]),
        parseInt(arr[3]),
        parseInt(arr[4]),
        parseInt(arr[5])
      ) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
    setTimeLeft(difference);
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // return <span>{hours}:{minutes}:{seconds}</span>;
    return (
      <CountDownContainer>
        <Title>Final Jhund Poster Drop</Title>
        <Row justify="center">
          <TimeCardContainer>
            <Row justify="center">
              <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Row justify="center">
                  <TimeCard>
                    <div>
                      <Number>{days}</Number>
                      <SubText>Days</SubText>
                    </div>
                  </TimeCard>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Row justify="center">
                  <TimeCard>
                    <div>
                      <Number>{hours}</Number>
                      <SubText>Hours</SubText>
                    </div>
                  </TimeCard>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Row justify="center">
                  <TimeCard>
                    <div>
                      <Number>{minutes}</Number>
                      <SubText>Minutes</SubText>
                    </div>
                  </TimeCard>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Row justify="center">
                  <TimeCard>
                    <div>
                      <Number>{seconds}</Number>
                      <SubText>Seconds</SubText>
                    </div>
                  </TimeCard>
                </Row>
              </Col>
            </Row>

            {/* <TimeCard>
            <div>
              <Number>{hours}</Number>
              <SubText>Hours</SubText>
            </div>
          </TimeCard>
          <TimeCard>
            <div>
              <Number>{minutes}</Number>
              <SubText>Minutes</SubText>
            </div>
          </TimeCard>
          <TimeCard>
            <div>
              <Number>{seconds}</Number>
              <SubText>Seconds</SubText>
            </div>
          </TimeCard> */}
          </TimeCardContainer>
        </Row>
      </CountDownContainer>
    );
  };
  // TODO: need to add timer that data from backend
  return (
    <Countdown date={new Date("2022-03-04 16:00:00")} renderer={renderer} />
  );
}

export default FinalCountDown;
