import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

let service = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon?limit=50`
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }
  componentDidMount() {
    service
      .get()
      .then(response => {
        this.setState({
          pokemons: response.data.results
        });
        console.log("pokemons", this.state.pokemons);
      })
      .catch(err => {
        throw err;
      });
  }
  render() {
    return (
      <div>
        <h1>Project with POKEAPI</h1>
        <div>
          <ul>{this.state.pokemons.map(pokemon => <li>{pokemon.name}</li>)}</ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));