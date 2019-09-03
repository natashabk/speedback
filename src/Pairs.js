import React, { useState } from 'react';
import { Card, Col, Row, Button, Alert, Typography } from 'antd';
import './App.css';
import PageTitle from './PageTitle';

const { Text } = Typography;
const stationStyle = {
	width: '45%',
	height: 'fit-content',
	textAlign: 'center',
	marginTop: 10,
	textTransform: 'capitalize',
};

const infoMessage = (
	<Text>
		<strong>
			What if there's an odd person out?
			<br />
		</strong>
		The odd person out should find a fun fact to share with the group at the
		end.
	</Text>
);

const Pairs = ({ people, currentRound, isEven }) => {
	const middleIdx = Math.floor(people.length / 2);

	return (
		<Col span={12}>
			<Card style={{ maxWidth: 400, minHeight: 350 }}>
				<PageTitle
					currentRound={currentRound}
					people={people}
					isEven={isEven}
					instruction="🍐 Get into your pairs"
				/>
				<Row
					type="flex"
					justify="space-around"
					style={{ flexWrap: 'wrap', minHeight: 300 }}
				>
					{people.map((teamMember, i) => {
						const member = <strong>{teamMember}</strong>;
						const partner = <strong>{people[people.length - i - 1]}</strong>;

						if (!isEven(people.length) && i === middleIdx)
							return <Card style={stationStyle}>{member} sitting out</Card>;
						if (i < middleIdx)
							return (
								<Card style={stationStyle} key={i}>
									{member} & {partner}
								</Card>
							);
					})}
				</Row>
				<Row type="flex" style={{ flexDirection: 'column' }}>
					<Alert
						message={infoMessage}
						type="info"
						showIcon
						style={{ marginBottom: 10 }}
					/>
					<Button size="large" type="primary" style={{ marginBottom: 10 }}>
						Everyone is Paired
					</Button>
					<Button size="large" type="danger" ghost>
						Exit Session
					</Button>
				</Row>
			</Card>
		</Col>
	);
};

export default Pairs;
