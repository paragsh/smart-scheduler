import {bindActionCreators} from "redux";
import * as actions from "../actions/fuelSavingsActions";
import {connect} from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
