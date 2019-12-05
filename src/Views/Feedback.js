import React from "react";
import NetlifyForm from "react-netlify-form";
import CardTitle from "../Components/CardTitle";
import { Button, Form, Input, message, Row } from "antd";
import { useSessionValue } from "../SessionContext";
import { submitButtonStyle, pairContentStyle } from "../styles";

const { Item } = Form;
const { TextArea } = Input;

const Feedback = () => {
  const { exitSession } = useSessionValue();
  const showError = () => {
    exitSession();
    return message.error("Your feedback was not sent. Maybe next time!");
  };

  const showSuccess = () => {
    exitSession();
    return message.success("Your feedback has been sent. Thanks for playing!");
  };

  return (
    <>
      <CardTitle />
      <Row
        type="flex"
        justify="space-around"
        style={{
          ...pairContentStyle,
          overflow: "unset",
          margin: "0px 0px auto"
        }}
      >
        <NetlifyForm name="feedback">
          {({ error, success }) => (
            <>
              {error ? showError() : null}
              {success ? showSuccess() : null}
              <Item label="Any suggestions for 'who goes first?'" colon={false}>
                <TextArea
                  name="who-goes-first"
                  placeholder="Ex: The person with the fastest car."
                  rows={3}
                />
              </Item>
              <Item
                label="Got any suggestions for 'odd one out'?"
                colon={false}
              >
                <TextArea
                  name="odd-one-out"
                  placeholder="Ex: Draw a hybrid of the first two animals you can think of."
                  rows={3}
                />
              </Item>
              <Item label="Any other feedback?" colon={false}>
                <TextArea
                  name="other-comments"
                  placeholder="Any praise/complaints/ideas?"
                  rows={3}
                />
              </Item>
              <Button
                htmlType="submit"
                size="large"
                type="primary"
                block
                style={submitButtonStyle}
              >
                Submit Feedback
              </Button>
            </>
          )}
        </NetlifyForm>
      </Row>
    </>
  );
};

export default Feedback;
