import React from 'react';
import NetlifyForm from 'react-netlify-form';
import { Button, Form, Input, message, Row } from 'antd';
import { allRadius } from './Constants';

const { Item } = Form;
const { TextArea } = Input;

export const formStyle = {
	minHeight: 410,
	height: 410,
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
};

const Feedback = ({ setActive, setCurrentRound }) => {
	const showError = () => {
		setActive('Settings');
		setCurrentRound(0);
		return message.error('Your feedback was not sent. Maybe next time!');
	};

	const showSuccess = () => {
		setActive('Settings');
		setCurrentRound(0);
		return message.success('Your feedback has been sent. Thanks for playing!');
	};
	return (
		<section
			style={{
				height: '100%',
				justifyContent: 'space-between',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<NetlifyForm name="feedback">
				{({ loading, error, success }) => (
					<>
						<Row style={{ margin: 'auto', width: '100%' }}>
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
						</Row>
						<Button
							htmlType="submit"
							size="large"
							type="primary"
							block
							style={{
								borderRadius: allRadius,
								height: 50,
								position: 'absolute',
								bottom: '4%',
								width: '87%',
							}}
						>
							Submit Feedback
						</Button>
					</>
				)}
			</NetlifyForm>
		</section>
	);
};

export default Feedback;
