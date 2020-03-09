import {ADD_DECK, ADD_CARD, DELETE_DECK, INIT_STORE} from "../actions";

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_STORE:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case DELETE_DECK:
      const copy = {...state};
      delete copy[action.id];
      return {...copy};
    case ADD_CARD:
      const newState =  {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title].questions,
            {
              question: action.question,
              answer: action.answer,
            }
          ]
        }
      }
      return newState;
    default:
      return state;
  }

}
