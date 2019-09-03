import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;
const blue = { color: '#1890ff' };

const PageTitle = ({ currentRound, people, isEven, instruction }) => {
	const numOfRounds = () => {
		if (people.length && isEven) return people.length - 1;
		else if (people.length) return people.length;
		else return 0;
	};

	return (
		<>
			<Title level={3}>
				Round <span style={blue}>{currentRound}</span> of {numOfRounds()}
			</Title>
			<Title level={4} style={{ fontWeight: 400, marginTop: 0 }}>
				{instruction}
			</Title>
		</>
	);
};

export default PageTitle;
