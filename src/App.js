import React, { Component } from "react";
import pen from "./assets/pen.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="mw6 mt4 px4 center">
        <header>
          <h1 className="f-headline lh-solid">
            This is the greatest{" "}
            <a href="https://www.amazon.com/gp/product/B002FSZP5A/">pen</a> of
            all time.
          </h1>
        </header>
        <section>
          <img src={pen} alt="the greatest pen of all time" />
        </section>
        <section>
          <h2>
            Seriously, do not ever buy another pen. This is the only one you
            need.
          </h2>
        </section>
      </div>
    );
  }
}

export default App;
