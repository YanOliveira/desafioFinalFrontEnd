import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';
import MeetupItem from './MeetupItem';

const MeetupList = props => (
  <Container>
    {console.tron.log(props)}
    <strong>{props.title}</strong>
    <div>
      {props.meetups.map(meetup => (
        <MeetupItem meetup={meetup} />
      ))}
    </div>
  </Container>
);

export default connect()(MeetupList);
