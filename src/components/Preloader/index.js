import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import api from '../../utils/api';
import { initStore } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    initStore: () => {dispatch(initStore())}
  }
};

const Preloader = ({ children, initStore }) => {
  useEffect(() => {
    api.getDecks().then(decks => {
      initStore(decks);
    });
  }, [initStore])
  return <>{children}</>;
}


export default connect(null, mapDispatchToProps)(Preloader)
