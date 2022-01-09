import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [
      ],
      searchFeild:""
    };
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({ accounts: users }))
  }
  render() {
    const {accounts,searchFeild} = this.state;
    const filtereddata = accounts.filter(accounts=>accounts.name.toLowerCase().includes(searchFeild.toLocaleLowerCase()))
    return (
      <div className="App">
<h1>Maker's Mark</h1>
        <SearchBox placeholder={"search robot"} 
        handleChange={e=>{this.setState({searchFeild:e.target.value})}} />
        <CardList accounts={filtereddata} />
      </div>
    );
  }
}
export default App;
