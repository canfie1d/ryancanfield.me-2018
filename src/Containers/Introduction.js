import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Introduction from '../Components/Introduction';
import { giveHint } from '../Actions/giveHint.js';

function mapStateToProps(state) {
  return {
    hintNeeded: state.hintNeeded,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      giveHint
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
