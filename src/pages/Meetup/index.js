import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Info } from "./styles";
import Header from "../../components/Header";

const Meetup = () => (
  <div>
    <Header />
    <Container>
      <img
        src="https://brunomedeirosjj.com/wp-content/uploads/2017/09/treinamento-de-seo-online.png"
        alt=""
      />
      <Info>
        <strong>Titulo meetup</strong>
        <span>120 Membros</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          possimus debitis, asperiores illo nobis, earum numquam atque beatae
          iste iure quia consequuntur odio vitae distinctio. Error nihil dicta
          dolore aliquam?
        </p>
        <span>Realizado em:</span>
        <small>Rua do evento, 260, cidade do evento - MG</small>
      </Info>

      <button type="button">Inscreva-se</button>
    </Container>
  </div>
);

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect()(Meetup);
// mapStateToProps,
// mapDispatchToProps
