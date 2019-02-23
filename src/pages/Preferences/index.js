import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Checkboxes, Option } from './styles';
import { creators as UsersActions } from '../../store/ducks/users';

const Preferences = ({ technologies, ...props }) => (
  <Container>
    <strong>Olá, Yan</strong>
    <p>
      Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
      selecionarmos os melhores meetups pra você:
    </p>

    <form onSubmit={() => {}}>
      <Checkboxes>
        <legend>Preferências</legend>
        {technologies.map(technology => (
          <Option key={technology.id}>
            <input type="checkbox" name="technologies" id={technology.id} value={technology.id} />
            <label htmlFor={technology.id}>
              <span />
              {technology.name}
            </label>
          </Option>
        ))}
      </Checkboxes>
      <button type="submit">Continuar</button>
    </form>
  </Container>
);

Preferences.propTypes = {
  technologies: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  // updateUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  technologies: state.technologies.technologies,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
