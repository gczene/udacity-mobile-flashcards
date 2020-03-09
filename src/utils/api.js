import { AsyncStorage } from 'react-native';

const DECK_KEY = '@mobileFlashCards'
export default {
  getDecks: async function () {
    return await AsyncStorage.getItem(DECK_KEY)
      .then((data) => {
        if (data !== null) {
          return JSON.parse(data);
        } else {
          return {};
        }
      });
  },
  addDeck: async function (deck) {
    return await AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
      [deck.title]: deck,
    }));
  },
  removeDeck: async function (id) {
    const decks = await this.getDecks();
    delete decks[id];
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks));
  },
  addCard: async function ({title: id, question, answer}) {
    const decks = await this.getDecks();

    const newDecks = {
      ...decks,
      [id]: {
        ...decks[id],
        questions: [...decks[id].questions, {question, answer}]
      }
    }
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(newDecks));
  }
}
