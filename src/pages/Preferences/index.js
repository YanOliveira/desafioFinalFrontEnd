import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTechnologies, getUser } from '../../services/localStorage';

import { Container, Checkboxes, Option } from './styles';
import { creators as UsersActions } from '../../store/ducks/users';

class Preferences extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
  };

  state = {
    technologies: [],
  };

  handleUpdatePreferences = (e) => {
    e.preventDefault();
    const { updateUserRequest, history } = this.props;
    updateUserRequest(this.state, history);
  };

  handleClickCheckbox = (item) => {
    const checkeds = this.state.technologies;
    const index = checkeds.indexOf(item);
    if (index === -1) {
      checkeds.push(item);
    } else {
      checkeds.splice(index, 1);
    }
    this.setState({ technologies: checkeds });
  };

  render() {
    const technologies = JSON.parse(getTechnologies());
    const { name } = JSON.parse(getUser());
    return (
      <Container>
        <strong>Olá, {name}</strong>
        <p>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </p>

        <form onSubmit={this.handleUpdatePreferences}>
          <Checkboxes onChange={e => this.handleClickCheckbox(e.target.value)}>
            <legend>Preferências</legend>
            {technologies.map(technology => (
              <Option key={technology.id}>
                <input
                  type="checkbox"
                  name="technologies"
                  id={technology.id}
                  value={technology.id}
                />
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
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Preferences));
