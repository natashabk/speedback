import React from 'react';
import { Card, Row } from 'antd';
import './App.css';
import PageTitle from './PageTitle';
import { contentStyle, cardStyle } from './Constants';

const stationStyle = {
	width: '45%',
	height: 'fit-content',
	textAlign: 'center',
	marginTop: 10,
	textTransform: 'capitalize',
};

const Pairs = ({ people, currentRound, isEven, setOddOneOut }) => {
	const middleIdx = Math.floor(people.length / 2);

	return (
		<Card style={cardStyle}>
			<PageTitle
				currentRound={currentRound}
				people={people}
				isEven={isEven}
				instruction="🍐 Get into your pairs"
				alert="oddNumber"
				continueText="Everyone is Paired"
			>
				<Row
					type="flex"
					justify="space-around"
					style={{ ...contentStyle, flexWrap: 'wrap' }}
				>
					{people.map((teamMember, i) => {
						const member = <strong>{teamMember}</strong>;
						const partner = <strong>{people[people.length - i - 1]}</strong>;

						if (!isEven(people.length) && i === middleIdx) {
							setOddOneOut(teamMember);
							return <Card style={stationStyle}>{member} sitting out</Card>;
						}
						if (i < middleIdx)
							return (
								<Card style={stationStyle} key={i}>
									{member} & {partner}
								</Card>
							);
					})}
				</Row>
			</PageTitle>
		</Card>
	);
};

export default Pairs;
