import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [
      ],
    };
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({ accounts: users }))
  }
  render() {
    return (
      <div className="App">
        <CardList accounts={this.state.accounts} />
      </div>
    );
  }
}
export default App;
