import React, { Component } from "react";
class Tabla extends Component {
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
    const { items } = this.state;
    if (items.length < 1) {
      return (
        <React.Fragment>
          <h6>Cargando datos...</h6>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Pages</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((book) => (
                <React.Fragment>
                  <tr>
                    <th scope="row"> {book.id}</th>
                    <td>{book.title}</td>
                    <td>{book.pageCount}</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Detalle
                      </button>
                      <button type="button" class="btn btn-primary">
                        Editar
                      </button>
                      <button type="button" class="btn btn-primary">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
}

export default Tabla;
