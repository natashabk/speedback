import React from "react";
import { Typography, Row, Icon } from "antd";
import { ReactComponent as Logo } from "../Assets/Logo-White.svg";
import { useSessionValue } from "../SessionContext";

const { Title } = Typography;

const PageHeader = () => {
  const { currentRound, active, numOfRounds } = useSessionValue();

  const getTitle = () => {
    if (active === "Settings") return "speedback";
    if (active === "Feedback") return "Thank you!";
    else return null;
  };

  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Title level={2} style={{ letterSpacing: 4, color: "#fff" }}>
          {getTitle() ? getTitle() : `round ${currentRound} of ${numOfRounds}`}
          {active === "Settings" && (
            <Icon
              style={{ width: 30, marginLeft: 10 }}
              component={() => <Logo />}
            />
          )}
        </Title>
      </Row>
    </>
  );
};

export default PageHeader;
