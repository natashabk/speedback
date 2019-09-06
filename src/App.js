import React, { useState } from 'react';
import { Layout } from 'antd';
import './App.css';
import Settings from './Settings';
import Pairs from './Pairs';
import Question from './Question';
import Round from './Round';
import Feedback from './Feedback';
import { appStyle } from './Constants';
import PageWrap from './PageWrap';

const { Content } = Layout;

const App = () => {
	const [currentRound, setCurrentRound] = useState(0);
	const [people, setPeople] = useState([]);
	const [pairTime, setPairTime] = useState(4);
	const [oddOneOut, setOddOneOut] = useState(null);
	const [active, setActive] = useState('Settings');
	const [sessionOver, setSessionOver] = useState(false);

	const isEven = num => num % 2 === 0;

	const numOfRounds = () => {
		if (people.length && isEven(people.length)) return people.length - 1;
		else if (people.length) return people.length;
		else return 0;
	};

	const isLastRound = currentRound === numOfRounds() && numOfRounds() !== 0;

	const nextRound = () => {
		if (active === 'Settings' || active === 'Round') {
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
		}
	};

	return (
		<Layout style={{ minHeight: '100vh', backgroundColor: '#e0e0e0' }}>
			<Content style={appStyle}>
				<PageWrap
					currentRound={currentRound}
					active={active}
					setActive={setActive}
					numOfRounds={numOfRounds}
					nextRound={nextRound}
					setCurrentRound={setCurrentRound}
					setPeople={setPeople}
					isLastRound={isLastRound}
					sessionOver={sessionOver}
				>
					{active === 'Settings' && (
						<Settings
							people={people}
							setPeople={setPeople}
							pairTime={pairTime}
							setPairTime={setPairTime}
							numOfRounds={numOfRounds}
						/>
					)}
					{active === 'Pairs' && (
						<Pairs
							people={people}
							isEven={isEven}
							setOddOneOut={setOddOneOut}
						/>
					)}
					{active === 'Question' && <Question oddOneOut={oddOneOut} />}
					{active === 'Round' && (
						<Round
							pairTime={pairTime}
							isLastRound={isLastRound}
							setSessionOver={setSessionOver}
						/>
					)}
					{active === 'Feedback' && <Feedback />}
				</PageWrap>
			</Content>
		</Layout>
	);
};

export default App;
