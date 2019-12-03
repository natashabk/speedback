import React, { useState } from "react";
import { Typography, Select, Form, Row, Radio, Card } from "antd";
import { useSessionValue } from "../SessionContext";
import CardTitle from "../Components/CardTitle";
import NextButton from "../Components/NextButton";
import {
  selectStyle,
  pairContentStyle,
  radioStyle,
  captionStyle
} from "../styles";

const { Item } = Form;
const { Text } = Typography;

const Settings = () => {
  const [error, setError] = useState(false);
  const {
    people,
    setPeople,
    setPairTime,
    pairTime,
    numOfRounds
  } = useSessionValue();
  const sessionLength = Math.floor(numOfRounds * pairTime + numOfRounds * 0.5);
  return (
    <>
      <CardTitle />
      <Row type="flex" justify="space-around" style={pairContentStyle}>
        <Item
          validateStatus={error ? "error" : "success"}
          help={error ? "Please enter two or more people to play." : null}
          style={{ width: "100%" }}
        >
          <Select
            mode="tags"
            size="large"
            rows={4}
            placeholder={
              <Text
                type="secondary"
                style={{ textTransform: "initial", fontSize: "0.9em" }}
              >
                Press enter after each name
              </Text>
            }
            onChange={present => {
              setPeople(present);
              setError(present.length <= 1 && error);
            }}
            value={people}
            style={selectStyle}
            dropdownRender={menu => (
              <div style={{ display: "none" }}>{menu}</div>
            )}
          />
        </Item>
        <Card
          bordered={false}
          style={{ width: "100%", textAlign: "center", minHeight: 90 }}
          bodyStyle={{ padding: 0 }}
        >
          <Radio.Group
            buttonStyle="solid"
            onChange={e => setPairTime(e.target.value)}
            defaultValue={pairTime}
            style={{ width: "100%" }}
          >
            {[3, 4, 5].map(num => (
              <Radio.Button key={num} value={num} style={radioStyle}>
                {`${num}`}
              </Radio.Button>
            ))}
          </Radio.Group>
          {people.length !== 0 && (
            <Text style={captionStyle}>
              This session will take around {sessionLength} minutes.
            </Text>
          )}
        </Card>
      </Row>
      <NextButton setError={setError} />
    </>
  );
};

export default Settings;
