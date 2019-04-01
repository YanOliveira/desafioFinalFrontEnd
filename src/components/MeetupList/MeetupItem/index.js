import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE_URL } from '../../../services/api';

import { Container, Info } from './styles';
import PropTypes from 'prop-types'

const MeetupItem = ({
  meetup: {
    file_id, title, users, meetup_id, id,
  },
}) => (
  <Container>
    <img src={`${BASE_URL}/files/${file_id}`} alt={title} />
    <div>
      <Info>
        <strong>{title.length > 10 ? `${title.substr(0, 22)}...` : title}</strong>
        <span>{users.length} Inscritos</span>
      </Info>
      <Link to={`meetup/${meetup_id || id}`}>
        <FontAwesomeIcon icon="angle-right" />
      </Link>
    </div>
  </Container>
);

MeetupItem.propTypes = {
  file_id: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  users: PropTypes.shape.isRequired, 
  meetup_id: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired,
};

export default connect()(MeetupItem);
