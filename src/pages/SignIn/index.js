import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Content, Form } from './styles';
import LogoIcon from '../../assets/images/logo.svg';

const SignIn = () => (
  <Container>
    <Content>
      <img src={LogoIcon} alt="Meetups App" />
      <Form>
        <span>Email</span>
        <input type="email" name="email" placeholder="Digite seu e-mail" required />
        <span>Senha</span>
        <input type="password" name="password" placeholder="Sua senha secreta" required />
        <button type="button">Entrar</button>
      </Form>
      <a href="/signup">Criar conta grátis</a>
    </Content>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(SignIn);
// mapStateToProps,
// mapDispatchToProps
