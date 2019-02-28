import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Checkboxes, Option, Form, Button } from "../../styles/components";
import Header from "../../components/Header";
import { updateCheckedBoxes } from "../../helpers/functions";
import { getTechnologies, getUser } from "../../services/localStorage";
import { creators as UsersActions } from "../../store/ducks/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
  };

  state = {
    name: "",
    new_password: "",
    new_password_confirmation: "",
    technologies: []
  };

  componentDidMount() {
    const user = JSON.parse(getUser());
    user.technologies.map(item => {
      this.setState({
        technologies: updateCheckedBoxes(
          this.state.technologies,
          !!item.id ? item.id.toString() : item.toString()
        )
      });
    });
    this.setState({ name: user.name });
  }

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
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleUpdatePreferences}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <label>Senha</label>
          <input
            type="password"
            name="new_password"
            placeholder="Sua senha secreta"
            onChange={e => this.setState({ new_password: e.target.value })}
            required
          />
          <label>Confirmação de senha</label>
          <input
            type="password"
            name="new_password_confirmation"
            placeholder="Sua senha secreta"
            onChange={e =>
              this.setState({ new_password_confirmation: e.target.value })
            }
            required
          />

          <Checkboxes onChange={e => this.handleClickCheckbox(e.target.value)}>
            <legend>Preferências</legend>
            {technologies.map(technology => (
              <Option key={technology.id}>
                <input
                  type="checkbox"
                  name="technologies"
                  id={technology.id}
                  value={technology.id}
                  checked={this.state.technologies.includes(
                    technology.id.toString()
                  )}
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
              "Salvar"
            )}
          </Button>
        </Form>
      </div>
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
)(Profile);
