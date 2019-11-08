import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Progress, Row, Typography, Button, Icon } from 'antd';
import { secondCounterPlaceholder } from '../Constants';
import Stars from '../Components/Stars';
import NextButton from '../Components/NextButton';
import { useSessionValue } from '../SessionContext';
import CardTitle from '../Components/CardTitle';
import { titleStyle, colors, allRadius } from '../styles';
import chime from '../Assets/chime.mp3';

const { Countdown } = Statistic;
const { Title } = Typography;

const Round = () => {
	const { pairTime, setActive, people, isLastRound } = useSessionValue();
	const roundTime = () => Date.now() + (1000 * 60 * pairTime) / 2;

	const [count, setCount] = useState(0);
	const [deadline, setDeadline] = useState(roundTime());
	const [firstActive, setFirstActive] = useState(true);
	const [timeRunning, setTimeRunning] = useState(true);
	const [playSound, setPlaySound] = useState(null);

	const milSeconds = (pairTime / 2) * 600;
	const percent = (count / milSeconds) * 100;
	const secondPercent = ((count - milSeconds) / (milSeconds / 10)) * 10;

	const useInterval = callback => {
		const savedCallback = useRef();
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);
		useEffect(() => {
			const tick = () => savedCallback.current();
			let id = setInterval(tick, 100);
			return () => clearInterval(id);
		}, [deadline]);
	};

	useInterval(() => setCount(count + 1));

	const getSecondPercent = () => {
		if (firstActive) return 0;
		else if (!firstActive && !timeRunning) return 100;
		else return secondPercent;
	};

	const checkMark = color => (
		<Icon type='check' style={{ fontSize: 50, color }} />
	);

	const getMessage = () => {
		if (timeRunning) {
			const prefix = firstActive ? 'First' : 'Second';
			const color = firstActive ? 'orange' : 'coral';
			return (
				<Title level={4} style={titleStyle}>
					<span style={{ color: colors[color] }}>{prefix}</span> person talking
				</Title>
			);
		} else
			return (
				<Title level={4} style={titleStyle}>
					{isLastRound ? 'Game' : 'Round'} over!
				</Title>
			);
	};
	const audioRef = useRef(null);

	return (
		<>
			<CardTitle timeRunning={timeRunning} />
			{playSound && <audio ref={audioRef} src={chime} autoPlay />}

			<Row
				type='flex'
				justify='space-around'
				style={{ margin: 'auto', width: '100%' }}
			>
				<Progress
					type='circle'
					strokeColor={colors.orange}
					percent={firstActive ? percent : 100}
					format={percent =>
						firstActive ? (
							<Countdown
								value={firstActive ? deadline : Date.now()}
								format='mm:ss'
								onFinish={() => {
									setFirstActive(false);
									setDeadline(roundTime());
									setPlaySound(true);
								}}
							/>
						) : (
							checkMark(colors.orange)
						)
					}
				/>
				<Progress
					type='circle'
					strokeColor={colors.coral}
					percent={getSecondPercent()}
					format={percent => {
						if (firstActive) return secondCounterPlaceholder[pairTime];
						else if (!timeRunning) return checkMark(colors.coral);
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
