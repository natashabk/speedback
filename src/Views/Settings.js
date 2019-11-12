import React, { useState } from 'react';
import { Typography, Select, Form, Row } from 'antd';
import { useSessionValue } from '../SessionContext';
import CardTitle from '../Components/CardTitle';
import NextButton from '../Components/NextButton';
import { selectStyle, pairContentStyle } from '../styles';

const { Item } = Form;
const { Text } = Typography;

const Settings = () => {
	const [error, setError] = useState(false);
	const { people, setPeople } = useSessionValue();

	return (
		<>
			<CardTitle />
			<Row type='flex' justify='space-around' style={pairContentStyle}>
				<Item
					validateStatus={error ? 'error' : 'success'}
					help={error ? 'Please enter two or more people to play.' : null}
					style={{ width: '100%' }}
				>
					<Select
						mode='tags'
						size='large'
						rows={4}
						placeholder={
							<Text type='secondary' style={{ textTransform: 'initial' }}>
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
							<div style={{ display: 'none' }}>{menu}</div>
						)}
					/>
				</Item>
			</Row>
			<NextButton setError={setError} />
		</>
	);
};

export default Settings;
