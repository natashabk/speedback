import React from 'react';
import { Card, Typography, Row, Button, Tooltip, Divider } from 'antd';
import { goesFirst, oddQuestionOut } from '../Constants';
import NextButton from '../Components/NextButton';
import { useSessionValue } from '../SessionContext';
import CardTitle from '../Components/CardTitle';
import { oddOneBodyStyle, questionBodyStyle } from '../styles';

const { Title, Text } = Typography;

const Question = () => {
	const {
		oddOneOut,
		currentQuestion,
		setCurrentQuestion,
		currentOddOne,
		setCurrentOddOne,
		shuffle,
	} = useSessionValue();

	const buttonProps = {
		size: 'small',
		shape: 'circle',
		icon: 'retweet',
	};

	return (
		<>
			<CardTitle />
			<Row style={{ margin: 'auto', width: '100%' }}>
				<Card style={{ height: 220 }} bodyStyle={questionBodyStyle}>
					<Row
						type='flex'
						justify='space-between'
						style={{ textAlign: 'right', marginRight: -10 }}
					>
						<Text type='secondary' style={{ fontSize: 17 }}>
							Who speaks first?
						</Text>
						<Button
							{...buttonProps}
							onClick={() => setCurrentQuestion(shuffle(goesFirst))}
						/>
					</Row>
					<Title level={3} style={{ fontWeight: 400, margin: 'auto' }}>
						The person {currentQuestion}
					</Title>
					<Tooltip
						title={
							<>
								<Text strong style={{ color: 'white' }}>
									Try one of the following:
								</Text>
								<Divider style={{ margin: '5px 0px 10px' }} />
								✂️ Rock, paper, scissors <br />
								💰 Flip a coin <br />
								☠️ Fight to the death <br />
							</>
						}
						placement='bottomLeft'
						trigger='click'
					>
						<Button type='link' style={{ padding: 0, textAlign: 'left' }}>
							What if it's a tie?
						</Button>
					</Tooltip>
				</Card>

				{oddOneOut && (
					<Card
						style={{ margin: '20px 0px', height: 190, maxHeight: 190 }}
						bodyStyle={oddOneBodyStyle}
					>
						<Row
							type='flex'
							justify='space-between'
							style={{ textAlign: 'right', marginRight: -10, marginTop: -5 }}
						>
							<Text type='secondary' style={{ fontSize: 17 }}>
								<span style={{ textTransform: 'capitalize' }}>{oddOneOut}</span>
								, you should:
							</Text>
							<Button
								{...buttonProps}
								onClick={() => setCurrentOddOne(shuffle(oddQuestionOut))}
							/>
						</Row>
						<Title level={3} style={{ fontWeight: 400, margin: 'auto' }}>
							{currentOddOne}
						</Title>
					</Card>
				)}
			</Row>
			<NextButton />
		</>
	);
};

export default Question;
