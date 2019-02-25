import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { creators as SessionsActions } from "../../store/ducks/sessions";
import { creators as UsersActions } from "../../store/ducks/users";

import { Container, Content } from "./styles";
import Header from "../../components/Header";

class Dashboard extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <h1>teste</h1>
        </Content>
      </Container>
    );
  }
}
// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);

export default connect()(withRouter(Dashboard));
// mapStateToProps,
// null,
