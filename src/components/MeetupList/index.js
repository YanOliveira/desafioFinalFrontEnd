import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles';
import MeetupItem from './MeetupItem';

const MeetupList = () => (
  <Container>
    <strong>Inscrições</strong>
    <div>
      <MeetupItem />
      <MeetupItem />
      <MeetupItem />
    </div>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(MeetupList);
// mapStateToProps,
// mapDispatchToProps
