import React from 'react';
import NetlifyForm from 'react-netlify-form';
import { Button, Form, Input, message, Row } from 'antd';
import { useSessionValue } from '../SessionContext';
import { submitButtonStyle, formStyle } from '../styles';

const { Item } = Form;
const { TextArea } = Input;

const Feedback = () => {
	const { setActive, setCurrentRound } = useSessionValue();
	const showError = () => {
		setActive('Settings');
		setCurrentRound(1);
		return message.error('Your feedback was not sent. Maybe next time!');
	};

	const showSuccess = () => {
		setActive('Settings');
		setCurrentRound(1);
		return message.success('Your feedback has been sent. Thanks for playing!');
	};
	return (
		<section style={formStyle}>
			<NetlifyForm name='feedback'>
				{({ error, success }) => (
					<>
						<Row style={{ margin: 'auto', width: '100%' }}>
							{error ? showError() : null}
							{success ? showSuccess() : null}
							<Item label="Any suggestions for 'who goes first?'" colon={false}>
								<TextArea
									name='who-goes-first'
									placeholder='Ex: The person with the fastest car.'
									rows={3}
								/>
							</Item>
							<Item
								label="Got any suggestions for 'odd one out'?"
								colon={false}
							>
								<TextArea
									name='odd-one-out'
									placeholder='Ex: Draw a hybrid of the first two animals you can think of.'
									rows={3}
								/>
							</Item>
							<Item label='Any other feedback?' colon={false}>
								<TextArea
									name='other-comments'
									placeholder='Any praise/complaints/ideas?'
									rows={3}
								/>
							</Item>
						</Row>
						<Button
							htmlType='submit'
							size='large'
							type='primary'
							block
							style={submitButtonStyle}
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
