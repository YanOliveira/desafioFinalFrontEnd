import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import { getTechnologies } from "../../services/localStorage";
import { updateCheckedBoxes } from "../../helpers/functions";
import { creators as MeetupsActions } from "../../store/ducks/meetups";

import {
  Checkboxes,
  Option,
  Form,
  Button,
  File
} from "../../styles/components";
import { uploadFile } from "../../store/sagas/meetups";

class NewMeetup extends Component {
  static propTypes = {
    uploadRequest: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired
  };

  state = {
    title: "",
    description: "",
    file_id: null,
    localization: "",
    technologies: [],
    image_name: ""
  };

  handleCreateMeetup = e => {
    e.preventDefault();
    const { uploadRequest, history } = this.props;
    uploadRequest(this.state, history);
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
              {this.state.image_name ? (
                this.state.image_name.substr(12)
              ) : (
                <FontAwesomeIcon className="icon" icon="camera" />
              )}
            </span>
            <input
              type="file"
              name="file"
              accept="image/*"
              required
              onChange={e =>
                this.setState({
                  file_id: e.target.files[0],
                  image_name: e.target.value
                })
              }
            />
          </File>
          <label>Localização</label>
          <input
            type="text"
            name="localization"
            placeholder="Onde seu meetup irá acontecer?"
            onChange={e => this.setState({ localization: e.target.value })}
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
            {this.props.loading ? (
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
)(withRouter(NewMeetup));
