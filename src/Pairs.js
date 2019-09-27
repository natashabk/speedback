import React, { useState } from 'react';
import { Card, Row, Modal, Button, Typography, Icon } from 'antd';
import './App.css';
import NextButton from './NextButton';
import { allRadius } from './Constants';

const { Text } = Typography;

const stationStyle = {
	height: 'fit-content',
	textAlign: 'center',
	marginTop: 10,
	textTransform: 'capitalize',
};

const pairContentStyle = {
	minHeight: 200,
	padding: 10,
	borderRadius: 4,
	flexWrap: 'wrap',
	overflow: 'auto',
	margin: 'auto',
	width: '100%',
};

const stationInnerStyle = {
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
};

const Pairs = ({ people, isEven, setOddOneOut, setActive, nextRound }) => {
	const [visible, setVisible] = useState(false);
	const middleIdx = Math.floor(people.length / 2);

	const getFont = teamMember => (teamMember.length > 12 ? 10 : 14);
	const padding = people.length > 12 ? 5 : 20;
	const width = people.length > 12 ? '30%' : '45%';

	return (
		<>
			<Row style={{ height: '10%', textAlign: 'center' }}>
				<Text>🍐 Get into your pairs</Text>
			</Row>
			<Row type="flex" justify="space-around" style={pairContentStyle}>
				{people.map((teamMember, i) => {
					const member = teamMember;
					const partner = people[people.length - i - 1];

					if (!isEven(people.length) && i === middleIdx) {
						setOddOneOut(teamMember);
						return (
							<Card
								key={i}
								style={{ ...stationStyle, width }}
								bodyStyle={{ ...stationInnerStyle, padding }}
							>
								<Text strong style={{ fontSize: getFont(member) }}>
									{member}
								</Text>
								<br />
								<br />
								sitting out
							</Card>
						);
					}
					if (i < middleIdx)
						return (
							<Card
								style={{ ...stationStyle, width }}
								key={i}
								bodyStyle={{ ...stationInnerStyle, padding }}
							>
								<Text strong style={{ fontSize: getFont(member) }}>
									{member}
								</Text>
								<br />&<br />
								<Text strong style={{ fontSize: getFont(partner) }}>
									{partner}
								</Text>
							</Card>
						);
				})}
			</Row>
			{!isEven(people.length) && (
				<>
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
							<span style={{ fontWeight: 600, fontSize: 16 }}>
								How to be alone
							</span>
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
				</>
			)}
			<NextButton active="Pairs" setActive={setActive} nextRound={nextRound} />
		</>
	);
};

export default Pairs;
