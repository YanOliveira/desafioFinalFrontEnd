import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Info } from './styles';
import Header from '../../components/Header';
import { creators as meetupsActions } from '../../store/ducks/meetups';
import { creators as subscriptionsActions } from '../../store/ducks/subscriptions';
import { BASE_URL } from '../../services/api';

class Meetup extends Component {
  componentDidMount() {
    console.tron.log(this.props);
    this.props.showMeetupRequest(this.props.match.params.id);
  }

  handleSubscription = () => {
    console.tron.log(this.props.match.params.id);
  };

  render() {
    const { meetup } = this.props;
    return (
      <div>
        <Header />
        <Container>
          <img src={`${BASE_URL}/files/${meetup.file_id}`} alt={meetup.title} alt="" />
          <Info>
            <strong>{meetup.title}</strong>
            <span>{meetup.users ? meetup.users.length : '0'} Membros</span>
            <p>{meetup.description}</p>
            <span>Realizado em:</span>
            <small>{meetup.localization}</small>
          </Info>

          <button type="button" onClick={this.handleSubscription}>
            Inscreva-se
          </button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({ meetup: state.meetups.meetup });

const mapDispatchToProps = dispatch => bindActionCreators({ ...meetupsActions, ...subscriptionsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
