import React , {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'


class App extends Component{
constructor(){
  super()
  this.state = {
    monsters : [],
    searchText : ''
  }
 // this.handleChange = this.handleChange.bind(this)
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}))
}

// handleChange(e) {
//   this.setState({searchText : e.target.value})
// }

handleChange = (event) => {
  this.setState({searchText : event.target.value})
}

render(){
  const { monsters , searchText } = this.state
  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchText.toLowerCase())
  })
  return (<div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}></SearchBox>
    <CardList monsters={filteredMonsters}></CardList>
  </div>)
}
}

export default App;
