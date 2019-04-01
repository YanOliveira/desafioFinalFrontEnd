import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Profile } from './styles';
import { creators as SessionsActions } from '../../store/ducks/sessions';
import LogoIcon from '../../assets/images/logo-white.svg';

const handleLogout = (destroySessionRequest, history) => {
  destroySessionRequest(history);
};

const Header = ({ destroySessionRequest, history }) => (
  <Container>
    <Nav>
      <img src={LogoIcon} alt="Meetups App" />
      <ul>
        <Link to="/">
          <li>Início</li>
        </Link>
        <Link to="/search">
          <li>Buscar</li>
        </Link>
        <Link to="/newmeetup">
          <li>Novo meetup</li>
        </Link>
      </ul>
    </Nav>
    <Profile>
      <FontAwesomeIcon className="iconHeader" icon="user" />
      <div>
        <ul>
          <Link to="/profile">
            <li>
              <FontAwesomeIcon className="icon" icon="edit" />
              Perfil
            </li>
          </Link>
          <li onClick={() => handleLogout(destroySessionRequest, history)}>
            <FontAwesomeIcon className="icon" icon="window-close" />
            Sair
          </li>
        </ul>
      </div>
    </Profile>
  </Container>
);

Header.propTypes = {
  destroySessionRequest: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(SessionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Header));
