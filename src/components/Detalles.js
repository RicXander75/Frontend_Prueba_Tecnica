import React, { Component } from "react";
class Detalles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://localhost:44307/api/books")
      .then((Response) => Response.json())
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
      return(
          <h1>Buenas</h1>  
      );
  }
}
export default Detalles;
