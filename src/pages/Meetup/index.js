import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Info } from './styles';
import Header from '../../components/Header';
import { creators as meetupsActions } from '../../store/ducks/meetups';
import { creators as subscriptionsActions } from '../../store/ducks/subscriptions';
import { BASE_URL } from '../../services/api';
import { getUser } from '../../services/localStorage';

class Meetup extends Component {
  state = {
    registered: false,
  };

  componentDidMount = () => {
    this.props.showMeetupRequest(this.props.match.params.id);
  };

  handleSubscription = () => {
    this.props.createSubscriptionRequest(this.props.match.params.id);
  };

  verifySubscription() {
    const user = JSON.parse(getUser());
    let registered = false;
    if (this.props.meetup.users) {
      this.props.meetup.users.forEach((item) => {
        if (item.id === user.id) {
          registered = true;
        }
      });
    }
    return registered;
  }

  render() {
    const { meetup } = this.props;
    return (
      <div>
        <Header />
        <Container>
          <img src={`${BASE_URL}/files/${meetup.file_id}`} alt={meetup.title} />
          <Info>
            <strong>{meetup.title}</strong>
            <span>{meetup.users ? meetup.users.length : '0'} Membros</span>
            <p>{meetup.description}</p>
            <span>Realizado em:</span>
            <small>{meetup.localization}</small>
          </Info>

          <button
            type="button"
            onClick={this.handleSubscription}
            className={this.verifySubscription() && 'disabled'}
            disabled={this.verifySubscription() && 'disabled'}

            >
            {this.props.loading ? (
              <FontAwesomeIcon icon="spinner" pulse size="2x" />
            ) : this.verifySubscription() ? (
              'Inscrito'
            ) : (
              'Inscreva-se'
            )}
          </button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetups.meetup,
  loading: state.subscriptions.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...meetupsActions, ...subscriptionsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
