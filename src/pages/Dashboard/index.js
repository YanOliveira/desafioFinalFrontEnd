import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import MeetupList from '../../components/MeetupList';
import { creators as subscriptionsActions } from '../../store/ducks/subscriptions';

class Dashboard extends Component {
  static propTypes = {
    loadRegisteredsRequest: PropTypes.func.isRequired,
    loadNotRegisteredsRequest: PropTypes.func.isRequired,
    loadRecomendedsRequest: PropTypes.func.isRequired,
    registereds: PropTypes.shape.isRequired,
    notRegistereds: PropTypes.shape.isRequired,
    recomendeds: PropTypes.shape.isRequired,
    registeredsLastPage: PropTypes.shape.isRequired,
    notRegisteredsLastPage: PropTypes.shape.isRequired,
    recomendedsLastPage: PropTypes.shape.isRequired,
  };

  state = {
    registeredPage: 1,
    notRegisteredPage: 1,
    recomendedPage: 1,
  };

  componentDidMount = () => {
    this.props.loadRegisteredsRequest(1);
    this.props.loadNotRegisteredsRequest(1);
    this.props.loadRecomendedsRequest(1);
  };

  handlePaginateRegistereds = async (option) => {
    const { registeredPage } = this.state;
    const { registeredsLastPage, loadRegisteredsRequest } = this.props;
    if (option === 'next') {
      if (registeredPage < registeredsLastPage) {
        await this.setState({ registeredPage: registeredPage + 1 });
        loadRegisteredsRequest(this.state.registeredPage);
      }
    } else if (registeredPage > 1) {
      await this.setState({ registeredPage: registeredPage - 1 });
      loadRegisteredsRequest(this.state.registeredPage);
    }
  };

  handlePaginateNotRegistereds = async (option) => {
    const { notRegisteredPage } = this.state;
    const { notRegisteredsLastPage, loadNotRegisteredsRequest } = this.props;
    if (option === 'next') {
      if (notRegisteredPage < notRegisteredsLastPage) {
        await this.setState({
          notRegisteredPage: notRegisteredPage + 1,
        });
        loadNotRegisteredsRequest(this.state.notRegisteredPage);
      }
    } else if (notRegisteredPage > 1) {
      await this.setState({
        notRegisteredPage: notRegisteredPage - 1,
      });
      loadNotRegisteredsRequest(this.state.notRegisteredPage);
    }
  };

  handlePaginateRecomendeds = async (option) => {
    const { recomendedPage } = this.state;
    const { recomendedsLastPage, loadRecomendedsRequest } = this.props;
    if (option === 'next') {
      if (recomendedPage < recomendedsLastPage) {
        await this.setState({ recomendedPage: recomendedPage + 1 });
        loadRecomendedsRequest(this.state.recomendedPage);
      }
    } else if (recomendedPage > 1) {
      await this.setState({ recomendedPage: recomendedPage - 1 });
      loadRecomendedsRequest(this.state.recomendedPage);
    }
  };

  render() {
    const { registereds, notRegistereds, recomendeds } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          {registereds.length > 0 && (
            <div className="list">
              <div className="icon" onClick={() => this.handlePaginateRegistereds('prev')}>
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Incrições" meetups={registereds} />
              <div className="icon" onClick={() => this.handlePaginateRegistereds('next')}>
                <FontAwesomeIcon icon="angle-right" />
              </div>
            </div>
          )}

          {notRegistereds.length > 0 && (
            <div className="list">
              <div className="icon" onClick={() => this.handlePaginateNotRegistereds('prev')}>
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Próximos Meetups" meetups={notRegistereds} />
              <div className="icon" onClick={() => this.handlePaginateNotRegistereds('next')}>
                <FontAwesomeIcon icon="angle-right" />
              </div>
            </div>
          )}

          {recomendeds.length > 0 && (
            <div className="list">
              <div className="icon" onClick={() => this.handlePaginateRecomendeds('prev')}>
                <FontAwesomeIcon icon="angle-left" />
              </div>
              <MeetupList title="Recomendados" meetups={recomendeds} />
              <div className="icon" onClick={() => this.handlePaginateRecomendeds('next')}>
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
