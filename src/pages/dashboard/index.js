import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { creators as SessionsActions } from '../../store/ducks/sessions';
import { creators as UsersActions } from '../../store/ducks/users';
import { getUser } from '../../services/auth';

import { Container } from './styles';
import Header from '../../components/Header';
import Preferences from '../preferences';

class Dashboard extends Component {
  static propTypes = {};

  state = {
    firstLogin: true,
  };

  async componentWillMount() {
    const user = await JSON.parse(getUser());
    this.setState({ firstLogin: user.technologies.length <= 1 });
  }

  render() {
    return <Container>{this.state.firstLogin ? <Preferences /> : <Header />}</Container>;
  }
}
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);

export default connect()(withRouter(Dashboard));
// mapStateToProps,
// null,
