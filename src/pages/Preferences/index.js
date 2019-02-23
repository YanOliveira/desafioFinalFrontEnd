import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles';

class Preferences extends Component {
  render() {
    return (
      <Container>
        <h1>ok</h1>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(Preferences);
// mapStateToProps,
// mapDispatchToProps
