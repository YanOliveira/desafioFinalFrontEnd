import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Content, Form } from './styles';
import LogoIcon from '../../assets/images/logo.svg';

const SignUp = () => (
  <Container>
    <Content>
      <img src={LogoIcon} alt="Meetups App" />
      <Form>
        <span>Nome</span>
        <input type="text" name="name" placeholder="Digite seu nome" required />
        <span>Email</span>
        <input type="email" name="email" placeholder="Digite seu e-mail" required />
        <span>Senha</span>
        <input type="password" name="password" placeholder="Sua senha secreta" required />
        <button type="submit">Criar conta</button>
      </Form>
      <a href="/signin">Já tenho conta</a>
    </Content>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(SignUp);
// mapStateToProps,
// mapDispatchToProps
