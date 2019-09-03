import React, { useState } from 'react';
import { Card, Statistic, Icon, Row, Button } from 'antd';
import './App.css';
import PageTitle from './PageTitle';
import { contentStyle, goesFirst } from './Constants';

const Question = ({ people, currentRound, isEven }) => {
	const shuffleQuestions = () =>
		goesFirst[Math.floor(Math.random() * goesFirst.length)];

	const [currentQuestion, setCurrentQuestion] = useState(shuffleQuestions());

	return (
		<Card style={{ maxWidth: 400, minHeight: 350 }}>
			<PageTitle
				currentRound={currentRound}
				people={people}
				isEven={isEven}
				instruction="🤔 Who is giving feedback first?"
				alert="draw"
				continueText="Start Round"
			>
				<Card type="inner" style={{ ...contentStyle, padding: 'unset' }}>
					<Row style={{ position: 'absolute', right: 10 }}>
						<Button
							shape="circle"
							size="large"
							icon="retweet"
							onClick={() => setCurrentQuestion(shuffleQuestions())}
						></Button>
					</Row>
					<Statistic title="The person..." value={currentQuestion} />
				</Card>
			</PageTitle>
		</Card>
	);
};

export default Question;
