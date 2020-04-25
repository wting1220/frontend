import React, { memo } from "react";
import "./App.css";
import { Layout, BackTop } from "antd";
import routes from "./router";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./actions";

export default memo(function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BackTop />
        <Layout>
          <Router>{renderRoutes(routes)}</Router>
        </Layout>
      </Provider>
    </div>
  );
});
