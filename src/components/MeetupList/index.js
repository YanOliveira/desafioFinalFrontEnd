import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Container } from './styles';
import MeetupItem from './MeetupItem';

const MeetupList = ({ title, meetups }) => (
  <Container>
    <strong>{title}</strong>
    <div>
      {meetups.map(meetup => (
        <MeetupItem meetup={meetup} />
      ))}
    </div>
  </Container>
);

MeetupList.propTypes = {
  title: PropTypes.string.isRequired,
  meetups: PropTypes.shape.isRequired,
};

export default connect()(MeetupList);
