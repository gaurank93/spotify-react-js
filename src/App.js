import React, { useState } from "react";
import "./App.css";
import BodySection from "./components/body";
import HomePage from "./components/homePage/HomePage";
import Layout from "./components/Layout";

function App() {
  const [loginToggle, setLoginToggle] = useState(false);
  function loginFunction(toggle) {
    setLoginToggle(toggle);
  }
  return (
    <>
      {loginToggle ? (
        <Layout>
          <BodySection  loginFunction={loginFunction}/>
        </Layout>
      ) : (
        <HomePage loginFunction={loginFunction} />
      )}
    </>
  );
}

export default App;
