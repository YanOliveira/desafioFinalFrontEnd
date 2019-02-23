import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Checkboxes, Option } from './styles';

class Preferences extends Component {
  checkBox = () => {};

  render() {
    return (
      <Container>
        <strong>Olá, Yan</strong>
        <p>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </p>

        <form>
          <Checkboxes>
            <legend>Preferências</legend>
            <Option>
              <input type="checkbox" name="favorite_pet" id="cat1" value="Cat1" />
              <label htmlFor="cat1">
                <span />
                Cat 1
              </label>
            </Option>
            <Option>
              <input type="checkbox" name="favorite_pet" id="cat2" value="Cat2" />
              <label htmlFor="cat2">
                <span />
                Cat 1
              </label>
            </Option>
          </Checkboxes>
          <button type="submit">Continuar</button>
        </form>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(Preferences);
// mapStateToProps,
// mapDispatchToProps
