import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Progress, Row, Typography, Button, Icon } from 'antd';
import { secondCounterPlaceholder } from '../Constants';
import Stars from '../Components/Stars';
import NextButton from '../Components/NextButton';
import { useSessionValue } from '../SessionContext';
import CardTitle from '../Components/CardTitle';
import { titleStyle, colors, allRadius } from '../styles';

const { Countdown } = Statistic;
const { Title } = Typography;

const Round = () => {
	const { pairTime, setActive, people, isLastRound } = useSessionValue();
	const roundTime = () => Date.now() + (1000 * 60 * pairTime) / 2;

	const [count, setCount] = useState(0);
	const [deadline, setDeadline] = useState(roundTime());
	const [firstActive, setFirstActive] = useState(true);
	const [timeRunning, setTimeRunning] = useState(true);

	const totalMilSeconds = (pairTime / 2) * 600;
	const percent = (count / totalMilSeconds) * 100;
	const secondPercent =
		((count - totalMilSeconds) / (totalMilSeconds / 10)) * 10;

	const useInterval = callback => {
		const savedCallback = useRef();
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			let id = setInterval(tick, 100);
			return () => clearInterval(id);
		}, [deadline]);
	};

	useInterval(() => {
		setCount(count + 1);
	});

	const getSecondPercent = () => {
		if (firstActive) return 0;
		else if (!firstActive && !timeRunning) return 100;
		else return secondPercent;
	};

	const getMessage = () => {
		if (timeRunning) {
			const prefix = firstActive ? 'First' : 'Second';
			return (
				<Title level={4} style={titleStyle}>
					<span style={colors[prefix]}>{prefix}</span> person talking
				</Title>
			);
		} else
			return (
				<Title level={4} style={titleStyle}>
					{isLastRound ? 'Game' : 'Round'} over!
				</Title>
			);
	};

	return (
		<>
			<CardTitle timeRunning={timeRunning} />
			<Row
				type='flex'
				justify='space-around'
				style={{ margin: 'auto', width: '100%' }}
			>
				<Progress
					type='circle'
					strokeColor='#80aaff'
					percent={firstActive ? percent : 100}
					format={percent =>
						firstActive ? (
							<Countdown
								value={firstActive ? deadline : Date.now()}
								format='mm:ss'
								onFinish={() => {
									setFirstActive(false);
									setDeadline(roundTime());
								}}
							/>
						) : (
							<Icon type='check' style={{ fontSize: 50 }} />
						)
					}
				/>
				<Progress
					type='circle'
					strokeColor='#ff8533'
					percent={getSecondPercent()}
					format={percent => {
						if (firstActive) return secondCounterPlaceholder[pairTime];
						else if (!timeRunning)
							return <Icon type='check' style={{ fontSize: 50 }} />;
						else
							return (
								<Countdown
									value={firstActive || !timeRunning ? Date.now() : deadline}
									format='mm:ss'
									onFinish={() => {
										setTimeRunning(false);
									}}
								/>
							);
					}}
				/>
			</Row>
			{getMessage()}
			{isLastRound && !timeRunning && (
				<Stars setActive={setActive} pairTime={pairTime} people={people} />
			)}
			{isLastRound && timeRunning && (
				<Button
					size='large'
					type='primary'
					onClick={() => {
						setTimeRunning(false);
						setDeadline(Date.now());
					}}
					style={{ borderRadius: allRadius, height: 50 }}
					block
				>
					End Session
				</Button>
			)}
			{!isLastRound && <NextButton />}
		</>
	);
};
export default Round;
