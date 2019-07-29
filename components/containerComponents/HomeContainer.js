/**
 * @format
 * @flow
 */
import { connect } from "react-redux";
import Home from "../Home";
import * as appActions from "../../redux/action/index";

const mapStateToProps = (state: empty, props: empty) => ({});
const mapDispatchToProps = dispatch => {
  return {
   
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
