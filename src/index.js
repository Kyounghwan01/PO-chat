import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import DetailDataContainer from "./containers/DetailDataContainer";
import App from "./containers/App";
import "./index.css";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/chats/:id" component={DetailDataContainer} />
      </Router>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
