import { Group, Pear, Talk, Stop, Shout, Fire } from './Assets'

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
  'who has met the lamest celebrity',
  'who has been at your company the longest',
  'with the most social media followers',
  'with the longest commute',
  'who talks the most in meetings',
  'who is late most often to meetings',
  'most likely to hand in their notice',
  'first person to shout a spell from Harry Potter',
  'who can count to three in the most languages',
  'who last ate pancakes',
  'who is tallest',
  'who has the biggest hands',
  'that has the longest socks on',
  'that got a great night\'s sleep'
]

export const oddQuestionOut = [
  'draw yourself as a teenager',
  'draw what you ate for breakfast this morning',
  'draw all the European countries without looking at a map',
  'make a paper airplane',
  'draw your perfect weekend',
  'draw at least one person in this group',
  'draw a cat on a skateboard',
  'draw a design for a new HotWheels car',
  'draw your perfect day',
  'draw Gordon Ramsey having a freakout',
  'draw the most exciting thing that happened at work recently',
  "draw a scene from a tv show you've watched recently",
  'draw a celebrity and see if people can guess who it is',
  'draw a room (or the whole thing) of your dream house',
  "draw the best pet you've ever had",
  "draw yourself doing something you've never done",
  'draw the meal you eat most often',
  'draw an animal birthday party',
  'draw or describe your ideal super power',
  'draw the ugliest creature'
]

export const alerts = {
  oddNumber: {
    headline: "What if there's an odd person out?",
    text:
      'The odd person out should find a fun fact to share with the group at the end.'
  },
  draw: {
    headline: "What if it's a draw?",
    text: 'Rock, paper, scissors. Winner speaks first.'
  }
}

export const pageInstructions = {
  Settings: {
    title: 'Enter your participants',
    continueText: 'Begin Session',
    nextScreen: 'Sound',
    prevScreen: 'Settings',
    icon: Group
  },
  Sound: {
    title: 'One quick check...',
    continueText: 'Ready to Play',
    nextScreen: 'Pairs',
    prevScreen: 'Settings',
    icon: Shout
  },
  Pairs: {
    title: 'Get into your pairs',
    continueText: 'Everyone is Paired',
    nextScreen: 'Question',
    prevScreen: 'Sound',
    icon: Pear
  },
  Question: {
    title: 'On your marks, get set...',
    continueText: 'Start Round',
    nextScreen: 'Round',
    prevScreen: 'Pairs',
    icon: Stop
  },
  Round: {
    title: 'Round in Progress',
    continueText: 'Next Pairing',
    nextScreen: 'Pairs',
    prevScreen: 'Question',
    icon: Fire
  },
  Feedback: {
    title: 'Feedback makes us better',
    continueText: 'Submit Feedback',
    nextScreen: 'Settings',
    prevScreen: 'Round',
    icon: Talk
  }
}