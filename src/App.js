import React from 'react';
import { Layout, Card } from 'antd';
import './Assets/App.css';
import Settings from './Views/Settings';
import Pairs from './Views/Pairs';
import Question from './Views/Question';
import Round from './Views/Round';
import Feedback from './Views/Feedback';
import Sound from './Views/Sound';
import { appStyle, mainStyle, innerStyle } from './styles';
import PageHeader from './Components/PageHeader';
import { useSessionValue } from './SessionContext';

const { Content } = Layout;

const App = () => {
	const { active, asked, pairTime } = useSessionValue();
	const screens = {
		Settings: <Settings />,
		Sound: <Sound />,
		Pairs: <Pairs />,
		Question: <Question asked={asked} />,
		Round: <Round />,
		Feedback: <Feedback />,
	};
	console.log(pairTime);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Content style={appStyle}>
				<PageHeader />
				<Card style={mainStyle} bodyStyle={innerStyle}>
					{screens[active]}
				</Card>
			</Content>
		</Layout>
	);
};

export default App;
