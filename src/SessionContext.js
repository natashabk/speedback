import React, { createContext, useContext, useState, useEffect } from 'react';
import { goesFirst, oddQuestionOut } from './Constants';

export const SessionContext = createContext();
export const useSessionValue = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
	const [currentRound, setCurrentRound] = useState(1);
	const [people, setPeople] = useState(['One', 'Two']);
	const [pairTime, setPairTime] = useState(4);
	const [oddOneOut, setOddOneOut] = useState();
	const [active, setActive] = useState('Sound');
	const [numOfRounds, setNumOfRounds] = useState(0);
	const [asked, setAsked] = useState([]);
	const [soundOn, setSoundOn] = useState(true);

	const shuffle = list => {
		const noRepeats = list.filter(question => !asked.includes(question));
		if (noRepeats.length === 0) setAsked([]);
		return noRepeats[Math.floor(Math.random() * noRepeats.length)];
	};
	const [currentQuestion, setCurrentQuestion] = useState(shuffle(goesFirst));
	const [currentOddOne, setCurrentOddOne] = useState(shuffle(oddQuestionOut));

	const isLastRound = currentRound === numOfRounds && numOfRounds !== 0;

	useEffect(() => {
		if (people.length && people.length % 2 === 0)
			setNumOfRounds(people.length - 1);
		else if (people.length) setNumOfRounds(people.length);
		else setNumOfRounds(0);
	}, [people]);

	const prevRound = () => setCurrentRound(currentRound - 1);

	const nextRound = () => {
		if (active === 'Round') {
			let newOrder = people;
			setCurrentRound(currentRound + 1);
			if (people.length % 2 === 0) {
				const hop = newOrder.splice(1, 1);
				newOrder.push(hop);
			} else {
				const hop = newOrder.pop();
				newOrder.unshift(hop);
			}
			setPeople(newOrder);
			setAsked([...asked, currentQuestion, currentOddOne]);
			setCurrentQuestion(shuffle(goesFirst));
			setCurrentOddOne(shuffle(oddQuestionOut));
		}
	};

	const exitSession = () => {
		setActive('Settings');
		setCurrentRound(1);
		setAsked([]);
	};

	return (
		<SessionContext.Provider
			value={{
				currentRound,
				nextRound,
				prevRound,
				people,
				setPeople,
				pairTime,
				setPairTime,
				oddOneOut,
				setOddOneOut,
				active,
				setActive,
				numOfRounds,
				isLastRound,
				exitSession,
				asked,
				currentQuestion,
				currentOddOne,
				setCurrentQuestion,
				setCurrentOddOne,
				shuffle,
				soundOn,
				setSoundOn,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

// Moving
// if the number of participants is even, person initially in [0] always stays in place
// person in [1] moves to the end each round,
// so all other people move one spot to the left.

// if it is odd, middle person always sits out
// each round, each person moves one spot to the right,
// and the last person goes to spot [0]
