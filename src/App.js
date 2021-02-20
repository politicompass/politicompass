import './App.css';
import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Steps, Step } from "react-step-builder";

import Header from './components/Header';

import Q1 from './questions/Question1';
import Q2 from './questions/Question2';
import Q3 from './questions/Question3';
import Q4 from './questions/Question4';
import Q5 from './questions/Question5';
import Answer from './Answer';

import Home from './pages/Home';

// Que pelicula es mejor: shrek, mean girls, space jam, infinity war
// Usar cubrebocas es una ideología política de izquierdas
// Dejar de comer pizza porque el día anterior comiste pizza
// Naciste desnudo y el resto es drag
// Un bolso pirata de Channel bien echo es lo mismo que un Channel original
// Cubrir tus pies con la sábana mientras duermes evitará que los monstruos que viven debajo de la cama te ataquen
// Britney spears es más dura que los integrantes de Metallica
// Usar una sombrilla para protegerte del sol
// Ser viejo te autoriza paraa usar chanclas con calcetines
// Un dragon mata al ca
// Mao es hupelpuff y stalin slitherin
// Stalin seguro era un aries

//https://dev.to/sametweb/how-to-create-multi-step-forms-in-react-3km4

function App() {
  const {t, i18n} = useTranslation()
  const Navigation = (props) => {
    return (
      <div>
        <hr/>
        <div className="flex">
          <button className="btn btnSec mr-1" onClick={props.prev}>{t("prev")}</button>
          <button className="btn btnPrim" onClick={props.next}>{t("next")}</button>
        </div>
      </div>
    );
  };
  const config = {
    navigation: {
      component: Navigation,
      location: "after" 
    }
  };
  const Loader = () => (
    <div className="App">
      <div>loading...</div>
    </div>
  );
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Router>
        <Header />
          <div className="container">
            <div className="card">
              <Switch>
                <Route exact path={["/test", "/"]}>
                  <Home/>
                  <hr/>
                  <div className="flex">
                    <NavLink className="btn btnPrim" to="/questions">{t("start")}</NavLink>
                  </div>
                </Route>
                <Route exact path="/questions">
                  <Steps config={config}>
                    <Step component={Q1} />
                    <Step component={Q2} />
                    <Step component={Q3} />
                    <Step component={Q4} />
                    <Step component={Q5} />
                    <Step component={Answer} />
                  </Steps>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
