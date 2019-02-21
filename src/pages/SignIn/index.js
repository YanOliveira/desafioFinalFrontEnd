import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { creators as SessionsActions } from '../../store/ducks/sessions';
import { Container, Content, Form } from './styles';
import LogoIcon from '../../assets/images/logo.svg';


class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    createSessionRequest: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
  };

  handleSignIn = (e) => {
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
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <span>Senha</span>
            <input
              type="password"
              name="password"
              placeholder="Sua senha secreta"
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Entrar</button>
          </Form>
          <Link to="/signup">Criar conta grátis</Link>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(SessionsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(SignIn));
