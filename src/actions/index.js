export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const addDeck = (title) => ({
  type: ADD_DECK,
  title,
});

export const addQuestion = ({title, question, answer}) => ({
  type: ADD_CARD,
  title,
  question,
  answer,
});


