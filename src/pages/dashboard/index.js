import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { creators as SessionsActions } from '../../store/ducks/sessions';

import { Container } from './styles';
import Header from '../../components/Header';

class Dashboard extends Component {
  static propTypes = {
    getSessionsRequest: PropTypes.func.isRequired,
    history: PropTypes.shape.isRequired,
  };

  state = {};

  componentDidMount() {
    const { getSessionsRequest, history } = this.props;
    getSessionsRequest(history);
  }

  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
// const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators(SessionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Dashboard));
