import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getTechnologies } from "../../services/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { Container, Checkboxes, Option } from "./styles";

const technologies = JSON.parse(getTechnologies());

const NewMeetup = () => (
  <Container>
    <Header />
    <form>
      <label>Título</label>
      <input type="text" name="title" placeholder="Digite o título do meetup" />
      <label>Descrição</label>
      <textarea
        name="description"
        cols="30"
        rows="5"
        placeholder="Descreva seu meetup"
      />
      <label>Imagem</label>
      <span className="fileUpdate">
        <FontAwesomeIcon className="icon" icon={faCamera} />
      </span>
      <input type="file" name="file_id" />
      <label>Localização</label>
      <input
        type="text"
        name="localization"
        placeholder="Onde seu meetup irá acontecer?"
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
      <button type="submit">Salvar</button>
    </form>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(NewMeetup);
// mapStateToProps,
// mapDispatchToProps
