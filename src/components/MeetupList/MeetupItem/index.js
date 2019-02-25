import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Button, Info } from "./styles";

const MeetupItem = () => (
  <Container>
    <img
      src="https://brunomedeirosjj.com/wp-content/uploads/2017/09/treinamento-de-seo-online.png"
      alt=""
    />
    <div>
      <Info>
        <strong>Meetup ReactJS</strong>
        <span>120 Inscritos</span>
      </Info>
      <Button>></Button>
    </div>
  </Container>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(MeetupItem);
// mapStateToProps,
// mapDispatchToProps
