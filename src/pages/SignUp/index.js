import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Content } from './styles';
import { Button, Form } from '../../styles/components';
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
    loading: PropTypes.bool.isRequired,
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
              <label>Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
                onChange={e => this.setState({ name: e.target.value })}
              />
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
              <label>Confirme sua Senha</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmação da sua senha"
                required
                onChange={e => this.setState({ password_confirmation: e.target.value })}
              />
              <Button type="submit">
                {this.props.loading ? <FontAwesomeIcon icon="spinner" pulse size="2x" /> : 'Entrar'}
              </Button>
            </Form>
            <Link to="/signin">Já tenho conta</Link>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(usersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SignUp));
