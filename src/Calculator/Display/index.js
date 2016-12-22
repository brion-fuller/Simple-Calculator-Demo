import { connect } from 'react-redux';
import { Display } from './Display';

export default connect(
    state => ({ value: state.calculations.value.join('') }),
)(Display);
