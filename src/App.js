import React, { useState } from 'react';
import { Layout, Typography, Row } from 'antd';
import './App.css';
import Settings from './Settings';
import Stats from './Stats';
import Pairs from './Pairs';
import { appStyle, titleStyle } from './Constants';

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
	const [currentRound, setCurrentRound] = useState(0);
	const [people, setPeople] = useState([]);
	const [pairTime, setPairTime] = useState(4);

	const isEven = num => num % 2 === 0;

	const nextRound = () => {
		let newOrder = people;
		setCurrentRound(currentRound + 1);

		if (isEven(people.length)) {
			// if it is even, person initially in [0] always stays in place
			// person in [1] moves to the end each round,
			// so all other people move one spot to the left
			const hop = newOrder.splice(1, 1);
			newOrder.push(hop);
		} else {
			// if it is odd, middle person always sits out
			// each round, each person moves one spot to the right,
			// and the last person goes to spot [0]
			const hop = newOrder.pop();
			newOrder.unshift(hop);
		}

		setPeople(newOrder);
	};

	return (
		<Layout style={appStyle}>
			<Content style={{ padding: '3%' }}>
				<Title style={titleStyle}>Speedback 3000</Title>
				<br />
				<Row>
					<Settings
						people={people}
						setPeople={setPeople}
						pairTime={pairTime}
						setPairTime={setPairTime}
					/>
					<Pairs
						pairTime={pairTime}
						people={people}
						currentRound={currentRound}
						isEven={isEven}
					/>
					{/* <Stats
						pairTime={pairTime}
						people={people}
						currentRound={currentRound}
						isEven={isEven(people.length)}
					/> */}
				</Row>
			</Content>
		</Layout>
	);
};

export default App;
