import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Checkboxes, Option, Form, Button } from "../../styles/components";
import Header from "../../components/Header";
import { updateCheckedBoxes } from "../../helpers/functions";
import { getTechnologies, getUser } from "../../services/localStorage";
import { creators as UsersActions } from "../../store/ducks/users";

class Profile extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
  };

  state = {
    name: "",
    password: "",
    password_confirmation: "",
    technologies: []
  };

  componentDidMount() {
    const user = JSON.parse(getUser());
    user.technologies.map(item => {
      this.setState({
        technologies: updateCheckedBoxes(
          this.state.technologies,
          item.id.toString()
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
          />
          <label>Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Sua senha secreta"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <label>Confirmação de senha</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Sua senha secreta"
            onChange={e =>
              this.setState({ password_confirmation: e.target.value })
            }
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
          <Button type="submit">Salvar</Button>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Profile);
// mapStateToProps,
// mapDispatchToProps
