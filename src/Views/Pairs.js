import React from 'react';
import { Card, Row, Tooltip, Typography, Icon } from 'antd';
import '../Images/App.css';
import NextButton from '../Components/NextButton';
import CardTitle from '../Components/CardTitle';
import { useSessionValue } from '../SessionContext';
import { stationStyle, pairContentStyle, stationInnerStyle } from '../styles';

const { Text } = Typography;

const Pairs = () => {
	const { people, setOddOneOut } = useSessionValue();
	const isEven = num => num % 2 === 0;
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
								bodyStyle={{ ...stationInnerStyle, padding: oddPadding }}
							>
								<Row style={{ textAlign: 'right', margin: '-18px -11px -3px' }}>
									<Tooltip
										title={
											<Text style={{ color: 'white' }}>
												Don't worry,
												<span
													style={{
														textTransform: 'capitalize',
														paddingLeft: 3,
													}}
												>
													{member}
												</span>
												. You'll find out what to do on the next page.
											</Text>
										}
										trigger='click'
									>
										<Icon
											type='question-circle'
											theme='filled'
											style={{ color: '#42C8C2' }}
										/>
									</Tooltip>
								</Row>
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
								bodyStyle={{ ...stationInnerStyle, padding: mainPadding }}
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
			<NextButton />
		</>
	);
};

export default Pairs;
