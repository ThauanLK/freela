import React from "react";
import logo from "./logo.svg";
import "./reset.css";
import Example from "./pages/example/example";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Example />
      <Footer />
    </React.Fragment>
  );
}

export default App;
