import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Container, Content } from "./styles";
import Header from "../../components/Header";
import MeetupList from "../../components/MeetupList";
import { creators as meetupsActions } from "../../store/ducks/meetups";

class Dashboard extends Component {
  static propTypes = {};

  state = {};

  async componentDidMount() {
    //
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <MeetupList title="Incrições" />
          <MeetupList title="Proximos" />
          <MeetupList title="Recomendados" />
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(meetupsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Dashboard));
