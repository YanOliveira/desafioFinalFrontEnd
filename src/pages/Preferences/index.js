import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Checkboxes, Option } from './styles';
import { creators as UsersActions } from '../../store/ducks/users';

class Preferences extends Component {
  static propTypes = {
    technologies: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
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
    const { technologies } = this.props;
    return (
      <Container>
        <strong>Olá, Yan</strong>
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

const mapStateToProps = state => ({
  technologies: state.technologies.technologies,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Preferences));
