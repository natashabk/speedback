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
	'who has been at HeadBox the longest',
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
	'draw your best approximation of European countries without looking at a map',
	'make a paper airplane',
	'draw your perfect weekend',
	'draw at least one person in this group',
	'draw a cat on a skateboard',
	'draw a design for the next HotWheels car',
	'draw your perfect day',
	'draw Gordon Ramsey having a FREAKOUT',
	'draw the most exciting thing that happened at work recently',
	"draw a scene from a tv show you've watched recently",
];

export const titleStyle = {
	fontWeight: 400,
};

export const appStyle = {
	maxHeight: 700,
	backgroundColor: '#f4f7fb',
	width: 480,
	margin: 'auto',
	padding: '3%',
	boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
};

export const contentStyle = {
	minHeight: 200,
	padding: 10,
	marginBottom: 10,
	borderRadius: 4,
};

export const cardStyle = {
	maxWidth: 400,
	minHeight: 350,
	backgroundColor: '#fff',
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
};
