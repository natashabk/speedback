import React, { useState, useEffect, useRef } from 'react';
import { Statistic, Progress, Row, Typography } from 'antd';

const { Countdown } = Statistic;
const { Title } = Typography;

const Round = ({ pairTime }) => {
	const roundTime = () => Date.now() + (1000 * 60 * pairTime) / 2;

	const [count, setCount] = useState(0);
	const [deadline, setDeadline] = useState(roundTime());
	const [firstActive, setFirstActive] = useState(true);
	const [timeRunning, setTimeRunning] = useState(true);

	const totalMilSeconds = (pairTime / 2) * 600;
	const percent = (count / totalMilSeconds) * 100;
	const secondPercent =
		((count - totalMilSeconds) / (totalMilSeconds / 10)) * 10;

	function useInterval(callback) {
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
	}

	useInterval(() => {
		setCount(count + 1);
	});

	return (
		<>
			<Row type="flex" justify="space-around" style={{ margin: '50px 0px' }}>
				<Progress
					type="circle"
					strokeColor="#80aaff"
					percent={firstActive ? percent : 100}
					format={percent => (
						<Countdown
							value={firstActive ? deadline : Date.now()}
							format="mm:ss"
							onFinish={() => {
								setFirstActive(false);
								setDeadline(roundTime());
							}}
						/>
					)}
				/>
				<Progress
					type="circle"
					strokeColor="#ff8533"
					percent={firstActive ? 0 : secondPercent}
					format={percent =>
						firstActive ? (
							`0${pairTime / 2}:00`
						) : (
							<Countdown
								value={firstActive ? Date.now() : deadline}
								format="mm:ss"
							/>
						)
					}
				/>
			</Row>
			<Title
				level={4}
				style={{ fontWeight: 400, textAlign: 'center', marginTop: 80 }}
			>
				{firstActive ? (
					<span style={{ color: '#80aaff' }}>First</span>
				) : (
					<span style={{ color: '#ff8533' }}>Second</span>
				)}{' '}
				person talking
			</Title>
		</>
	);
};
export default Round;
