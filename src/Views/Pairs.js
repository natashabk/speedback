import React, { useState } from 'react';
import { Card, Row, Modal, Button, Typography } from 'antd';
import '../Images/App.css';
import NextButton from '../Components/NextButton';
import CardTitle from '../Components/CardTitle';
import { useSessionValue } from '../SessionContext';
import { stationStyle, pairContentStyle, stationInnerStyle } from '../styles';

const { Text } = Typography;

const Pairs = () => {
	const { people, setOddOneOut } = useSessionValue();
	const isEven = num => num % 2 === 0;
	const [visible, setVisible] = useState(false);
	const middleIdx = Math.floor(people.length / 2);

	const getFont = teamMember => (teamMember.length > 12 ? 10 : 14);
	const mainPadding = people.length > 12 ? 5 : 20;
	const oddPadding = people.length > 12 ? 5 : '20px 15px';
	const width = people.length > 12 ? '30%' : '45%';

	return (
		<>
			<CardTitle />
			<Row type='flex' justify='space-around' style={pairContentStyle}>
				{people.map((teamMember, i) => {
					const member = teamMember;
					const partner = people[people.length - i - 1];

					if (!isEven(people.length) && i === middleIdx) {
						setOddOneOut(teamMember);
						return (
							<Card
								key={i}
								style={{ ...stationStyle, width }}
								bodyStyle={{ ...stationInnerStyle, oddPadding }}
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
								bodyStyle={{ ...stationInnerStyle, mainPadding }}
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
						type='link'
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
							type='primary'
							style={{ marginTop: 45 }}
							block
						>
							OK
						</Button>
					</Modal>
				</>
			)}
			<NextButton />
		</>
	);
};

export default Pairs;
