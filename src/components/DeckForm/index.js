import { connect } from 'react-redux';
import DeckForm from './DeckForm';
import { addDeck } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (title) => dispatch(addDeck(title))
  };
};
const mapStateToProps = (state, { navigation }) => {
  return {
    navigation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm)

