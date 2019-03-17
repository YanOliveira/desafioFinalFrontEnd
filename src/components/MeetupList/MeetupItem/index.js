import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE_URL } from '../../../services/api';

import { Container, Button, Info } from './styles';

const MeetupItem = props => (
  <Container>
    <img src={`${BASE_URL}/files/${props.meetup.file_id}`} alt={props.meetup.title} />
    <div>
      <Info>
        <strong>{props.meetup.title}</strong>
        <span>{props.meetup.users.length} Inscritos</span>
      </Info>
      <Link to={`meetup/${props.meetup.meetup_id || props.meetup.id}`}>
        <FontAwesomeIcon icon="angle-right" />
      </Link>
    </div>
  </Container>
);

export default connect()(MeetupItem);
