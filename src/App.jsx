import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

function App() {
  return (
    <>
      <Provider store={AppStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
