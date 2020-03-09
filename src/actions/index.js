import api from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';
export const INIT_STORE = 'INIT_STORE';

export const addDeck = (title) => {
  return dispatch => {
    return api.addDeck({
      title,
      questions: []
    })
      .then(() => dispatch({
        type: ADD_DECK,
        title,
      }))
  }
};

export const addQuestion = ({ title, question, answer }) => {
  return dispatch => {
    return api.addCard({ title, question, answer })
      .then(() => {
        dispatch({
          type: ADD_CARD,
          title,
          question,
          answer,
        });
      });
  };

};

export const deleteDeck = (id) => {
  return dispatch => {
    return api.removeDeck(id)
      .then(() => {
        dispatch({
          type: DELETE_DECK,
          id,
        });
      });
  };
};

export const initStore = () => {
  return dispatch => {
    return api.getDecks()
      .then(decks => {
        dispatch({
          type: INIT_STORE,
          decks,
        });
      });
  }
};

