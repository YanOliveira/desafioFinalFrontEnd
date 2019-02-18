import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Content, Form } from './styles';
import LogoIcon from '../../assets/images/logo.svg';

import { creators as usersActions } from '../../store/ducks/users';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
  };

  handleSignUp = (e) => {
    const { addUserRequest, history } = this.props;
    e.preventDefault();
    addUserRequest(this.state, history);
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Content>
            <img src={LogoIcon} alt="Meetups App" />
            <Form onSubmit={this.handleSignUp}>
              <span>Nome</span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
                onChange={e => this.setState({ name: e.target.value })}
              />
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
              <span>Confirme sua Senha</span>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmação da sua senha"
                required
                onChange={e => this.setState({ password_confirmation: e.target.value })}
              />
              <button type="submit">Criar conta</button>
            </Form>
            <Link to="/signin">Já tenho conta</Link>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(usersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(SignUp));
