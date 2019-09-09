import React, { useState } from 'react';
import { Card, Row, Modal, Button, Typography } from 'antd';
import './App.css';
import NextButton from './NextButton';

const { Text } = Typography;

const stationStyle = {
	width: '45%',
	height: 'fit-content',
	textAlign: 'center',
	marginTop: 10,
	textTransform: 'capitalize',
};

const pairContentStyle = {
	minHeight: 200,
	padding: 10,
	marginBottom: 10,
	borderRadius: 4,
	flexWrap: 'wrap',
};

const Pairs = ({ people, isEven, setOddOneOut, setActive, nextRound }) => {
	const [visible, setVisible] = useState(false);
	const middleIdx = Math.floor(people.length / 2);

	return (
		<>
			<Row type="flex" justify="space-around" style={pairContentStyle}>
				{people.map((teamMember, i) => {
					const member = <strong>{teamMember}</strong>;
					const partner = <strong>{people[people.length - i - 1]}</strong>;

					if (!isEven(people.length) && i === middleIdx) {
						setOddOneOut(teamMember);
						return (
							<Card key={i} style={stationStyle}>
								{member}
								<br />
								<br />
								sitting out
							</Card>
						);
					}
					if (i < middleIdx)
						return (
							<Card style={stationStyle} key={i}>
								{member}
								<br />&<br />
								{partner}
							</Card>
						);
				})}
			</Row>
			<Button
				type="link"
				style={{ margin: 'auto', width: '100%' }}
				onClick={() => setVisible(true)}
			>
				What if there's an odd person out?
			</Button>
			<Modal
				visible={visible}
				footer={null}
				onCancel={() => setVisible(false)}
				style={{ maxWidth: 360 }}
			>
				<Text>
					<span style={{ fontWeight: 600, fontSize: 16 }}>How to be alone</span>
					<br />
					<br />
					Don't worry, the odd person out will receive their activity on the
					next page.
				</Text>

				<Button
					onClick={() => setVisible(false)}
					type="primary"
					style={{ marginTop: 45 }}
					block
				>
					OK
				</Button>
			</Modal>
			<NextButton active="Pairs" setActive={setActive} nextRound={nextRound} />
		</>
	);
};

export default Pairs;
