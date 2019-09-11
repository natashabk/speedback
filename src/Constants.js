export const goesFirst = [
	'with the most siblings',
	'with the least pets',
	'with the coolest hobby',
	'with the most people living in their house',
	'who last ate',
	'who last went to a concert',
	'who last went to the theatre',
	'who last exercised',
	'who last drove a car',
	'who last went on holiday',
	'who plays the most instruments',
	'who has the most hair',
	'who can drink the most beer in 60 seconds',
	'who has seen a ghost',
	'who has owned the most cats in their lifetime',
	'whose hometown is furthest away',
	'currently wearing the most black',
	'who can clap the loudest',
	'who can do the best Yorkshire accent',
	'who can jump the highest',
	'who can click their fingers the most times in 5 seconds',
	'most likely to be asked for ID at a bar',
	'who has met the coolest celebrity',
	'who has met the lamest celebrity',
	'who has been at your company the longest',
	'with the most social media followers',
	'with the longest commute',
	'who talks the most in meetings',
	'who is late most often to meetings',
	'most likely to hand in their notice',
	'first person to shout a spell from Harry Potter',
	'who can count to three in the most languages',
];

export const oddQuestionOut = [
	'draw yourself as a teenager',
	'draw what you ate for breakfast this morning',
	'draw all the European countries without looking at a map',
	'make a paper airplane',
	'draw your perfect weekend',
	'draw at least one person in this group',
	'draw a cat on a skateboard',
	'draw a design for the next HotWheels car',
	'draw your perfect day',
	'draw Gordon Ramsey having a freakout',
	'draw the most exciting thing that happened at work recently',
	"draw a scene from a tv show you've watched recently",
];

export const appStyle = {
	backgroundColor: '#f4f7fb',
	height: '100vh',
	maxHeight: 620,
	width: '100%',
	maxWidth: 480,
	margin: '0px auto',
	padding: '3%',
};

export const mainStyle = {
	paddingTop: 20,
	minHeight: 430,
	height: 430,
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
};

export const alerts = {
	oddNumber: {
		headline: "What if there's an odd person out?",
		text:
			'The odd person out should find a fun fact to share with the group at the end.',
	},
	draw: {
		headline: "What if it's a draw?",
		text: 'Rock, paper, scissors. Winner speaks first.',
	},
};

export const pageInstructions = {
	Settings: {
		title: '👇 Enter participants below',
		continueText: 'Begin Session',
		nextScreen: 'Pairs',
	},
	Pairs: {
		title: '🍐 Get into your pairs',
		continueText: 'Everyone is Paired',
		nextScreen: 'Question',
	},
	Question: {
		title: '🤔 Who is giving feedback first?',
		continueText: 'Start Round',
		nextScreen: 'Round',
	},
	Round: {
		title: '🔥 Round in Progress',
		continueText: 'Next Pairing',
		nextScreen: 'Pairs',
	},
	Feedback: {
		title: '📬 Your feedback makes us better',
		continueText: 'Submit Feedback',
		nextScreen: 'Settings',
	},
};

export const secondCounterPlaceholder = [
	'00:00',
	'00:30',
	'01:00',
	'01:30',
	'02:00',
	'02:30',
	'03:00',
];
