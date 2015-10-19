import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    counter: state
  };
}

export default (Component, actions) => {
  return connect(mapStateToProps, (dispatch) => {
    return bindActionCreators(actions, dispatch);
  })(Component);
};
