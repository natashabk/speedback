import React, { useState } from 'react';
import { Card, Typography, Row, Button, Modal } from 'antd';
import { goesFirst, oddQuestionOut } from './Constants';
import NextButton from './NextButton';

const { Title, Text } = Typography;

const Question = ({ oddOneOut, setActive, nextRound }) => {
	const shuffle = list => list[Math.floor(Math.random() * list.length)];

	const [visible, setVisible] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(shuffle(goesFirst));
	const [currentOddOne, setCurrentOddOne] = useState(shuffle(oddQuestionOut));

	return (
		<>
			<Card style={{ height: 160 }} bodyStyle={{ height: 160, paddingTop: 10 }}>
				<Row style={{ textAlign: 'right', marginRight: -10 }}>
					<Button
						size="small"
						shape="circle"
						icon="retweet"
						onClick={() => setCurrentQuestion(shuffle(goesFirst))}
					></Button>
				</Row>
				<Title level={3} style={{ fontWeight: 400 }}>
					The person {currentQuestion}
				</Title>
				<Button
					type="link"
					style={{ padding: 0 }}
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
					If the question results in a tie, you can break the deadlock using one
					of these methods:
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
					type="primary"
					style={{ marginTop: 15, width: '100%' }}
				>
					OK
				</Button>
			</Modal>
			{oddOneOut && (
				<Card
					style={{ margin: '20px 0px', height: 150, maxHeight: 150 }}
					bodyStyle={{ height: 150 }}
				>
					<Row
						type="flex"
						justify="space-between"
						style={{ textAlign: 'right', marginRight: -10, marginTop: -5 }}
					>
						<Text style={{ fontSize: 17, color: '#9c9b9b' }}>
							<span style={{ textTransform: 'capitalize' }}>{oddOneOut}</span>,
							you should:
						</Text>
						<Button
							size="small"
							shape="circle"
							icon="retweet"
							onClick={() => setCurrentOddOne(shuffle(oddQuestionOut))}
						></Button>
					</Row>

					<Title level={3} style={{ fontWeight: 400, marginTop: 0 }}>
						{currentOddOne}
					</Title>
				</Card>
			)}
			<NextButton
				active="Question"
				setActive={setActive}
				nextRound={nextRound}
			/>
		</>
	);
};

export default Question;
