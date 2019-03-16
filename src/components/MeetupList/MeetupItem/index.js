import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE_URL } from '../../../services/api';

import { Container, Button, Info } from './styles';

const MeetupItem = props => (
  <Container>
    {console.tron.log(props.meetup)}
    <img src={`${BASE_URL}/files/${props.meetup.file_id}`} alt={props.meetup.title} />
    <div>
      <Info>
        <strong>{props.meetup.title}</strong>
        <span>{props.meetup.users.length} Inscritos</span>
      </Info>
      <Button type="button">
        <FontAwesomeIcon icon="angle-right" />
      </Button>
    </div>
  </Container>
);

export default connect()(MeetupItem);
