import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  Container, Nav, Profile, ProfileMenu,
} from './styles';
import LogoIcon from '../../assets/images/logo-white.svg';

const Header = () => (
  <Container>
    <Nav>
      <img src={LogoIcon} alt="Meetups App" />
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/">Buscar</a>
        </li>
        <li>
          <a href="/">Novo meetup</a>
        </li>
      </ul>
    </Nav>
    <Profile>
      <FontAwesomeIcon icon={faUser} />
      <div>
        <ul>
          <li>menu 1</li>
          <li>menu 2</li>
        </ul>
      </div>
    </Profile>
  </Container>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);

export default connect()(Header);
// mapStateToProps,
// mapDispatchToProps
