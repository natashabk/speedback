import React, { useState } from 'react';
import NetlifyForm from 'react-netlify-form';
import { Button, Form, Input, message } from 'antd';
import { mainStyle, insideMainStyle } from './Constants';

const { Item } = Form;
const { TextArea } = Input;

const Feedback = ({ nextRound, setActive }) => {
	return (
		<>
			<NetlifyForm name="feedback">
				{({ loading, error, success }) => (
					<section style={insideMainStyle}>
						{error &&
							message.error('Your feedback was not sent. Maybe next time!')}
						{success &&
							message.success(
								'Your feedback has been sent. Thanks for playing!',
							)}
						<Item
							label="Any suggestions for 'who goes first?'"
							colon={false}
							style={{ marginBottom: 10 }}
						>
							<TextArea
								name="who-goes-first"
								placeholder="Ex: The person with the fastest car."
								rows={3}
							/>
						</Item>
						<Item
							label="Got any suggestions for 'odd one out'?"
							colon={false}
							style={{ marginBottom: 10 }}
						>
							<TextArea
								name="odd-one-out"
								placeholder="Ex: Draw a hybrid of the first two animals you can think of."
								rows={3}
							/>
						</Item>
						<Item
							label="Any other feedback?"
							colon={false}
							style={{ marginBottom: 10 }}
						>
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
							loading={loading}
							block
						>
							Submit Feedback
						</Button>
					</section>
				)}
			</NetlifyForm>
		</>
	);
};

export default Feedback;
