import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { creators as SessionsActions } from "../../store/ducks/sessions";
import { Container, Content } from "./styles";
import { Button, Form } from "../../styles/components";
import LogoIcon from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    createSessionRequest: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired
  };

  handleSignIn = e => {
    e.preventDefault();
    const { createSessionRequest, history } = this.props;
    createSessionRequest(this.state, history);
  };

  render() {
    return (
      <Container>
        <Content>
          <img src={LogoIcon} alt="Meetups App" />
          <Form onSubmit={this.handleSignIn}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <label>Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Sua senha secreta"
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button type="submit">
              {!!this.props.loading ? (
                <FontAwesomeIcon icon="spinner" pulse size="2x" />
              ) : (
                "Entrar"
              )}
            </Button>
          </Form>
          <Link to="/signup">Criar conta grátis</Link>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sessions.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SessionsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
