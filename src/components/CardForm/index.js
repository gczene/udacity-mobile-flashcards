import { connect } from 'react-redux';
import CardForm from "./CardForm";
import { addQuestion } from '../../actions';

const mapStateToProps = (state, { navigation, route }) => {
  return {
    navigation,
    title: route.params.title,
  };
};

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    onSubmit: (data) => dispatch(addQuestion(data)),
    navigation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)
