import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Button, Info } from './styles';

const MeetupItem = () => (
  <Container>
    <img
      src="https://brunomedeirosjj.com/wp-content/uploads/2017/09/treinamento-de-seo-online.png"
      alt=""
    />
    <div>
      <Info>
        <strong>Meetup ReactJS</strong>
        <span>120 Inscritos</span>
      </Info>
      <Button type="button">
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(MeetupItem);
// mapStateToProps,
// mapDispatchToProps
