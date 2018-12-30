import React from "react";
import ReactDOM from "react-dom";
import MultiItemsCarousel from "./MultiItemsCarousel";


class App extends React.Component {
  render() {
    return (
      <div align="center"> 
       <MultiItemsCarousel></MultiItemsCarousel>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));