import React, { useState, useRef } from 'react';
import { Row, Button, Switch, Typography, Radio, Card } from 'antd';
import '../Assets/App.css';
import NextButton from '../Components/NextButton';
import CardTitle from '../Components/CardTitle';
import { useSessionValue } from '../SessionContext';
import { radioStyle, pairContentStyle, colors } from '../styles';
import chime from '../Assets/chime.mp3';

const { Text } = Typography;

const innerCardStyle = {
	borderRadius: 4,
	width: '100%',
	marginBottom: 25,
};

const captionStyle = {
	color: colors.aqua,
	fontSize: 12,
	lineHeight: 3,
};

const Sound = () => {
	const {
		soundOn,
		setSoundOn,
		pairTime,
		setPairTime,
		people,
		numOfRounds,
	} = useSessionValue();
	const [sound, testSound] = useState(null);
	const audioRef = useRef(null);
	const sessionLength = Math.floor(numOfRounds * pairTime + numOfRounds * 0.5);

	return (
		<>
			<CardTitle />
			{sound && <audio ref={audioRef} src={chime} autoPlay />}
			<Row type='flex' justify='space-around' style={pairContentStyle}>
				<Card
					title='Sound Settings'
					style={innerCardStyle}
					bodyStyle={{ textAlign: 'center' }}
				>
					<Switch defaultChecked onChange={checked => setSoundOn(checked)} />
					<Button
						size='small'
						style={{ marginLeft: 20 }}
						onClick={async () => {
							if (sound) await testSound(false);
							testSound(true);
						}}
					>
						Test
					</Button>
					<br />
					<Text style={captionStyle}>
						All sounds are {soundOn ? 'on' : 'off'}.
					</Text>
				</Card>
				<Card
					title='Minutes per pair'
					style={innerCardStyle}
					bodyStyle={{ display: 'grid' }}
				>
					<Radio.Group
						buttonStyle='solid'
						onChange={e => setPairTime(e.target.value)}
						defaultValue={pairTime}
					>
						{[3, 4, 5].map(num => (
							<Radio.Button key={num} value={num} style={radioStyle}>
								{`${num}`}
							</Radio.Button>
						))}
					</Radio.Group>
					{people.length !== 0 && (
						<Text style={captionStyle}>
							This session will take around {sessionLength} minutes.
						</Text>
					)}
				</Card>
			</Row>
			<NextButton />
		</>
	);
};

export default Sound;
