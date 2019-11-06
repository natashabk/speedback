import React, { useState } from 'react';
import { Card, Typography, Row, Button, Modal } from 'antd';
import { goesFirst, oddQuestionOut } from '../Constants';
import NextButton from '../Components/NextButton';
import { useSessionValue } from '../SessionContext';
import CardTitle from '../Components/CardTitle';

const { Title, Text } = Typography;

const Question = () => {
	const { oddOneOut, setActive } = useSessionValue();
	const shuffle = list => list[Math.floor(Math.random() * list.length)];

	const [visible, setVisible] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(shuffle(goesFirst));
	const [currentOddOne, setCurrentOddOne] = useState(shuffle(oddQuestionOut));

	return (
		<>
			<CardTitle />
			<Row style={{ margin: 'auto', width: '100%' }}>
				<Card
					style={{ height: 220 }}
					bodyStyle={{
						height: 220,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						paddingBottom: 10,
					}}
				>
					<Row
						type='flex'
						justify='space-between'
						style={{ textAlign: 'right', marginRight: -10 }}
					>
						<Text type='secondary' style={{ fontSize: 17 }}>
							Who speaks first?
						</Text>
						<Button
							size='small'
							shape='circle'
							icon='retweet'
							onClick={() => setCurrentQuestion(shuffle(goesFirst))}
						></Button>
					</Row>
					<Title level={3} style={{ fontWeight: 400, margin: 'auto' }}>
						The person {currentQuestion}
					</Title>
					<Button
						type='link'
						style={{ padding: 0, textAlign: 'left' }}
						onClick={() => setVisible(true)}
					>
						What if it's a tie?
					</Button>
				</Card>
				<Modal
					visible={visible}
					footer={null}
					onCancel={() => setVisible(false)}
					style={{ maxWidth: 360 }}
				>
					<Text>
						<span style={{ fontWeight: 600, fontSize: 16 }}>
							How to solve a tie
						</span>
						<br />
						<br />
						If the question results in a tie, you can break the deadlock using
						one of these methods:
						<br />
						<br />
						✂️ Rock, paper, scissors <br />
						💰 Flip a coin <br />
						💪 Arm wrestle <br />
						☠️ Fight to the death <br />
					</Text>
					<br />
					<Button
						onClick={() => setVisible(false)}
						type='primary'
						style={{ marginTop: 15, width: '100%' }}
					>
						OK
					</Button>
				</Modal>
				{oddOneOut && (
					<Card
						style={{ margin: '20px 0px', height: 190, maxHeight: 190 }}
						bodyStyle={{
							height: 190,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
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
								size='small'
								shape='circle'
								icon='retweet'
								onClick={() => setCurrentOddOne(shuffle(oddQuestionOut))}
							></Button>
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
