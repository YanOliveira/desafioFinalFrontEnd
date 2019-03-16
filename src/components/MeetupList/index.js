import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles';
import MeetupItem from './MeetupItem';

const MeetupList = props => (
  <Container>
    <strong>{props.title}</strong>
    {props.meetups.map(meetup => (
      <div>
        <MeetupItem meetup={meetup} />
      </div>
    ))}
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(MeetupList);
// mapStateToProps,
// mapDispatchToProps
