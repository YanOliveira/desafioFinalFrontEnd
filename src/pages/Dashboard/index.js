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

  handleSearch(search) {
    const {
      loadRegisteredsRequest,
      loadNotRegisteredsRequest,
      loadRecomendedsRequest,
    } = this.props;
    loadRegisteredsRequest(this.state.registeredPage, search);
    loadNotRegisteredsRequest(this.state.notRegisteredPage, search);
    loadRecomendedsRequest(this.state.recomendedPage, search);
  }

  render() {
    console.tron.log(this.props);
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
          {this.props.registereds.length > 0 && (
            <div className="list">
              <div className="icon">
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Incrições" meetups={this.props.registereds} />
              <div className="icon">
                <FontAwesomeIcon icon="angle-right" />
              </div>
            </div>
          )}
          
          {this.props.notRegistereds.length > 0 && (
            <div className="list">
              <div
                className="icon"
                onClick={() => {
                  this.setState({
                    notRegisteredPage: this.state.notRegisteredPage > 1 && this.state.notRegisteredPage - 1,
                  });
                  this.props.loadNotRegisteredsRequest(this.state.notRegisteredPage);
                }}
              >
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Próximos Meetups" meetups={this.props.notRegistereds} />
              <div
                className="icon"
                onClick={() => {
                  this.setState({
                    notRegisteredPage: this.state.notRegisteredPage < this.props.notRegisteredsLastPage && this.state.notRegisteredPage + 1,
                  });
                  this.props.loadNotRegisteredsRequest(this.state.notRegisteredPage);
                }}
              >
                <FontAwesomeIcon icon="angle-right" />
              </div>
            </div>
          )}

          {this.props.recomendeds.length > 0 && (
            <div className="list">
              <div className="icon">
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Recomendados" meetups={this.props.recomendeds} />
              <div className="icon">
                <FontAwesomeIcon icon="angle-right" />
              </div>
            </div>
          )}
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
  registeredsLastPage: state.subscriptions.registeredsLastPage,
  notRegisteredsLastPage: state.subscriptions.notRegisteredsLastPage,
  recomendedsLastPage: state.subscriptions.recomendedsLastPage,
});

const mapDispatchToProps = dispatch => bindActionCreators(subscriptionsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
