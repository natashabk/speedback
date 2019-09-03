import React, { useState } from 'react';
import { Statistic, Typography, Progress, Card, Row } from 'antd';
import { titleStyle } from './Constants';
import PageTitle from './PageTitle';

const { Title } = Typography;
const { Countdown } = Statistic;

const Round = ({ pairTime, people, currentRound, isEven }) => {
	const [deadline, setDeadline] = useState(
		Date.now() + (1000 * 60 * pairTime) / 2,
	);
	const totalTime = -(Date.now() - deadline) / 1000; //num of seconds

	return (
		<Card style={{ maxWidth: 400, minHeight: 350 }}>
			<PageTitle
				currentRound={currentRound}
				people={people}
				isEven={isEven}
				instruction="🔥 Round in Progress"
				continueText="Next Pairing"
			>
				<Row type="flex" justify="space-around" style={{ margin: '30px 0px' }}>
					<Progress
						type="circle"
						percent={(Date.now() - deadline) / totalTime}
						format={percent => <Countdown value={deadline} format="mm:ss" />}
					/>
					{/* {updateTime()} */}
					<Progress type="circle" percent={100} />
				</Row>
			</PageTitle>
		</Card>
	);
};
export default Round;
