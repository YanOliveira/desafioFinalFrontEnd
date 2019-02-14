import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

class Main extends Component {
  static propTypes = {};

  state = {};

  render() {
    return <Container>REACT JS</Container>;
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);

export default connect(
  null,
  null,
)(Main);
