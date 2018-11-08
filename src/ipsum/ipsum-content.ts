export const ipsumContentArray: IIpsumContent[] = [
  {
    sentences: [
      'Tahani saves the universe',
      'This is hashtag Tahani time',
      'Your cardigan\'s on inside out',
      'I made a bird as well. I used a reflective alloy, holding up a mirror to mankind and it\'s mistreatment of these defenceless animals',
      'Tahani in Arabic means congratulations and Al-Jamil means beautiful. So my whole name altogether means...',
      'Look at the terrible placement and angle. Is that your first time wearing a sash?',
      'Barcelona actually',
      'I knelt in front of Princess Stephanie and swore to always make a party too much',
      'Also apparently sashes are out this season',
      'The diagonal line really draws one’s eye to the chin bloat',
    ],
    tag: {
      id: 'pretentious',
      text: 'Forking Pretentious',
    },
  },
  {
    sentences: [
      'Take my credit card to the hedge fund! I’ll meet you at the martini store',
      'Please excuse me for my boorish behaviour. You weren’t boring. You were fun.',
      'You got me! The bridge is made up, the farm is made up, there’s no such place as Guam!',
      'Bortles!',
      'Blake Bortles is a cool name. Derek Bortles is a dumb name.',
      'Then I\'ll be Jake. Jortles! And I worked in the molotov cocktail department',
      'I can literally hear all the sounds in the universe.',
    ],
    tag: {
      id: 'funny',
      text: 'Forking funny',
    },
  }
];

export interface IIpsumContent {
  tag: IIpsumTag;
  sentences: string[];
}

export interface IIpsumTag {
  id: string;
  text: string;
}
