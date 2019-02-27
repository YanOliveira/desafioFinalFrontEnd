import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEdit,
  faWindowClose
} from "@fortawesome/free-regular-svg-icons";
import { Container, Nav, Profile } from "./styles";
import { creators as SessionsActions } from "../../store/ducks/sessions";
import LogoIcon from "../../assets/images/logo-white.svg";

const handleLogout = props => {
  props.destroySessionRequest(props.history);
};
handleLogout.propTypes = {
  destroySessionRequest: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired
};

const Header = props => (
  <Container>
    <Nav>
      <img src={LogoIcon} alt="Meetups App" />
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/search">Buscar</Link>
        </li>
        <li>
          <Link to="/newmeetup">Novo meetup</Link>
        </li>
      </ul>
    </Nav>
    <Profile>
      <FontAwesomeIcon className="iconHeader" icon={faUser} />
      <div>
        <ul>
          <Link to="/profile">
            <li>
              <FontAwesomeIcon className="icon" icon={faEdit} />
              Perfil
            </li>
          </Link>
          <li onClick={() => handleLogout(props)}>
            <FontAwesomeIcon className="icon" icon={faWindowClose} />
            Sair
          </li>
        </ul>
      </div>
    </Profile>
  </Container>
);

// const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(SessionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Header));
// mapStateToProps,
// mapDispatchToProps
