import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import Header from '../../components/Header';
import MeetupList from '../../components/MeetupList';
import { creators as subscriptionsActions } from '../../store/ducks/subscriptions';

class Dashboard extends Component {
  static propTypes = {};

  state = {
    registeredPage: 1,
    notRegisteredPage: 1,
    recomendedPage: 1,
  };

  componentDidMount() {
    const {
      loadRegisteredsRequest,
      loadNotRegisteredsRequest,
      loadRecomendedsRequest,
    } = this.props;
    loadRegisteredsRequest(this.state.registeredPage);
    loadNotRegisteredsRequest(this.state.notRegisteredPage);
    loadRecomendedsRequest(this.state.recomendedPage);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <MeetupList title="Incrições" meetups={this.props.registereds} />
          <MeetupList title="Proximos" meetups={this.props.notRegistereds} />
          <MeetupList title="Recomendados" meetups={this.props.recomendeds} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  registereds: state.subscriptions.registereds,
  notRegistereds: state.subscriptions.notRegistereds,
  recomendeds: state.subscriptions.recomendeds,
});

const mapDispatchToProps = dispatch => bindActionCreators(subscriptionsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
