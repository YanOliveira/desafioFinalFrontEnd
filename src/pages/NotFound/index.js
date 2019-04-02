import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';

import { Container } from './styles';

const NotFound = () => (
  <div>
    <Header />
    <Container>
      <FontAwesomeIcon icon="frown" size="2x" />
      <strong>Desculpe, mas algo deu errado. Tente novamente mais tarde.</strong>
    </Container>
  </div>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(NotFound);
// mapStateToProps,
// mapDispatchToProps
