import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import api from '../../utils/api';
import { initStore } from '../../actions';
import { setLocalNotification } from "../../utils/notifications";

const mapDispatchToProps = (dispatch) => {
  return {
    initStore: () => {dispatch(initStore())}
  }
};

const Preloader = ({ children, initStore }) => {
  useEffect(() => {
    api.getDecks().then(decks => {
      initStore(decks);
      setLocalNotification();
    });
  }, [ initStore ])
  return <>{ children }</>;
}


export default connect(null, mapDispatchToProps)(Preloader)
