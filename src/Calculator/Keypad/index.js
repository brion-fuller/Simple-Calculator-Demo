import { connect } from 'react-redux';
import { Keypad } from './Keypad';
import * as actions from './actions';

export default connect(
  () => ({}),
  actions,
)(Keypad);
