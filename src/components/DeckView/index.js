import DeckView from "./DeckView";
import {connect} from "react-redux";
import {deleteDeck} from "../../actions";

const mapStateToProps = (state, { route }) => {
  const id = route.params.id;
  return {
    deck: state.decks[id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDeck: (id) => dispatch(deleteDeck(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckView)
