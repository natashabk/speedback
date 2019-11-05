import React, { createContext, useContext, useState, useEffect } from 'react';

export const SessionContext = createContext();
export const useSessionValue = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
	const [currentRound, setCurrentRound] = useState(1);
	const [people, setPeople] = useState(['one', 'two']);
	const [pairTime, setPairTime] = useState(4);
	const [oddOneOut, setOddOneOut] = useState(null);
	const [active, setActive] = useState('Pairs');
	const [numOfRounds, setNumOfRounds] = useState(0);

	const isLastRound = currentRound === numOfRounds && numOfRounds !== 0;

	useEffect(() => {
		if (people.length && people.length % 2 === 0)
			setNumOfRounds(people.length - 1);
		else if (people.length) setNumOfRounds(people.length);
		else setNumOfRounds(0);
	}, [people]);

	const prevRound = () => setCurrentRound(currentRound - 1);
	const nextRound = () => {
		if (active === 'Settings' || active === 'Round') {
			let newOrder = people;
			setCurrentRound(currentRound + 1);

			if (people.length % 2 === 0) {
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

	const exitSession = () => {
		setActive('Settings');
		setCurrentRound(0);
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
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};
