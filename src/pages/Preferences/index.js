import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTechnologies, getUser } from "../../services/localStorage";
import { updateCheckedBoxes } from "../../helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./styles";
import { Checkboxes, Option, Form, Button } from "../../styles/components";
import { creators as UsersActions } from "../../store/ducks/users";

class Preferences extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
  };

  state = {
    technologies: []
  };

  handleUpdatePreferences = e => {
    e.preventDefault();
    const { updateUserRequest, history } = this.props;
    updateUserRequest(this.state, history);
  };

  handleClickCheckbox = item => {
    this.setState({
      technologies: updateCheckedBoxes(this.state.technologies, item)
    });
  };

  render() {
    const technologies = JSON.parse(getTechnologies());
    const { name } = JSON.parse(getUser());
    return (
      <Container>
        <strong>Olá, {name}</strong>
        <p>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
          preferências para selecionarmos os melhores meetups pra você:
        </p>

        <Form onSubmit={this.handleUpdatePreferences}>
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
          <Button type="submit">
            {!!this.props.loading ? (
              <FontAwesomeIcon icon="spinner" pulse size="2x" />
            ) : (
              "Continuar"
            )}
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Preferences));
