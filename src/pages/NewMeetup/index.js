import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { getTechnologies } from "../../services/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateCheckedBoxes } from "../../helpers/functions";
import { creators as MeetupsActions } from "../../store/ducks/meetups";

import {
  Checkboxes,
  Option,
  Form,
  Button,
  File
} from "../../styles/components";

class NewMeetup extends Component {
  // static propTypes = {
  //   updateUserRequest: PropTypes.func.isRequired,
  //   history: PropTypes.func.isRequired
  // };
  state = {
    title: "",
    description: "",
    file_id: "",
    localization: "",
    technologies: []
  };

  handleCreateMeetup = e => {
    // e.preventDefault();
    console.tron.log(this.state);
    // const { updateUserRequest, history } = this.props;
    // updateUserRequest(this.state, history);
  };

  handleClickCheckbox = item => {
    this.setState({
      technologies: updateCheckedBoxes(this.state.technologies, item)
    });
  };

  handleUploadFile = file => {
    this.props.uploadRequest(file);
  };

  render() {
    const technologies = JSON.parse(getTechnologies());
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleCreateMeetup}>
          <label>Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do meetup"
            required
            autoFocus
            onChange={e => this.setState({ title: e.target.value })}
          />
          <label>Descrição</label>
          <textarea
            name="description"
            rows="5"
            placeholder="Descreva seu meetup"
            required
            onChange={e => this.setState({ description: e.target.value })}
          />
          <label>Imagem</label>
          <File>
            <span className="fileUpdate">
              <FontAwesomeIcon className="icon" icon="camera" />
            </span>
            <input
              type="file"
              name="file_id"
              required
              onChange={e => this.handleUploadFile(e.target.value)}
            />
          </File>
          <label>Localização</label>
          <input
            type="text"
            name="localization"
            placeholder="Onde seu meetup irá acontecer?"
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
  loading: state.meetups.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMeetup);
