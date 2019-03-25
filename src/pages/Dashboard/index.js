import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content, Search } from './styles';
import Header from '../../components/Header';
import MeetupList from '../../components/MeetupList';
import { creators as subscriptionsActions } from '../../store/ducks/subscriptions';

class Dashboard extends Component {
  static propTypes = {};

  state = {
    registeredPage: 1,
    notRegisteredPage: 1,
    recomendedPage: 1,
    file: null,
  };

  componentDidMount = () => {
    const {
      loadRegisteredsRequest,
      loadNotRegisteredsRequest,
      loadRecomendedsRequest,
    } = this.props;
    loadRegisteredsRequest(this.state.registeredPage);
    loadNotRegisteredsRequest(this.state.notRegisteredPage);
    loadRecomendedsRequest(this.state.recomendedPage);
  };

  handleSearch(e) {
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
          {this.props.match.url === '/search' && (
            <Search>
              <div className="logo">
                <FontAwesomeIcon className="icon" icon="search" />
              </div>
              <input
                type="text"
                placeholder="Buscar Meetups"
                onChange={e => this.handleSearch(e.target.value)}
              />
            </Search>
          )}
          <MeetupList title="Incrições" meetups={this.props.registereds} />
          <MeetupList title="Próximos Meetups" meetups={this.props.notRegistereds} />
          <MeetupList title="Recomendados" meetups={this.props.recomendeds} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state,
  registereds: state.subscriptions.registereds,
  notRegistereds: state.subscriptions.notRegistereds,
  recomendeds: state.subscriptions.recomendeds,
});

const mapDispatchToProps = dispatch => bindActionCreators(subscriptionsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
