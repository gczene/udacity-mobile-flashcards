import DeckView from "./DeckView";
import {connect} from "react-redux";

const mapStateToProps = (state, { route }) => {
  const id = route.params.id;
  return {
    deck: state.decks[id]
  };
};

export default connect(mapStateToProps)(DeckView)
