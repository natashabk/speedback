import bg from './Images/Speedback-bg.png';
export const allRadius = 35;

// Feedback

export const submitButtonStyle = {
	borderRadius: allRadius,
	height: 50,
	position: 'absolute',
	bottom: '4%',
	width: '87%',
};

export const formStyle = {
	height: '100%',
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
};

// Pairs

export const stationStyle = {
	height: 'fit-content',
	textAlign: 'center',
	marginTop: 10,
	textTransform: 'capitalize',
};

export const pairContentStyle = {
	minHeight: 200,
	padding: 10,
	borderRadius: 4,
	flexWrap: 'wrap',
	overflow: 'auto',
	margin: 'auto',
	width: '100%',
};

export const stationInnerStyle = {
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
};

// Question

export const oddOneBodyStyle = {
	height: 190,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
};

export const questionBodyStyle = {
	height: 220,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	paddingBottom: 10,
};

// Round

export const titleStyle = {
	fontWeight: 400,
	textAlign: 'center',
	margin: 'auto',
	width: '100%',
};

export const colors = {
	First: { color: '#80aaff' },
	Second: { color: '#ff8533' },
};

// Settings

export const radioStyle = {
	width: '33%',
	textAlign: 'center',
	height: 50,
	display: 'inline-grid',
};

export const selectStyle = {
	maxHeight: 220,
	overflow: 'auto',
	textTransform: 'capitalize',
	width: '100%',
};

// App

export const appStyle = {
	backgroundColor: '#fff',
	height: '100vh',
	maxHeight: 750,
	width: '100%',
	maxWidth: 420,
	margin: '0px auto',
	padding: '2% 3% 3%',
	fontFamily: 'Gotham Rounded Medium',
	backgroundImage: `url('${bg}')`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
};

export const mainStyle = {
	height: '85%',
	borderRadius: allRadius,
};

export const innerStyle = {
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
};

export const newColors = {
	indigo: '#26324B',
	green: '#42C8C2',
	hovergreen: '#3bb1ac',
	orange: '#FEA938',
	pink: '#F42549',
};
