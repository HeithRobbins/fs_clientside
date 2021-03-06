import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import StorageItem from "./storageitem.js"


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      storages: [],
      name: "",
      date: "",
      weight: "",
      amount: "",
    }
  }

  deleteItem = id=> {
    fetch(`https://hr-foodstorage.herokuapp.com/storage/${id}`, {
      method: "DELETE",
    }).then(
      this.setState({
        storages: this.state.storages.filter(item => {
          return item.id !== id
        })
      })
      )
      .catch((err) => console.log("added storage error:", err))
  }

  renderStorage = () => {
    return this.state.storages.map(item => {
      return <StorageItem key={item.id} item={item} deleteItem={this.deleteItem} />
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("https://hr-foodstorage.herokuapp.com/storage", {
        name: this.state.name,
        date: this.state.date,
        weight: this.state.weight,
        amount: this.state.amount
      })
      .then((res) => {
        console.log(res)
        // this.setState({
        //   storages: [res.data, ...this.state.storages],
        //   storage: "",
        // })
      })
      .catch((err) => console.log("added storage error: ", err))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    axios
      .get('https://hr-foodstorage.herokuapp.com/storages')
      .then(res => {

        this.setState({
          storages: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="app">
        <h1>"This is are FamilyStorage"</h1>
        <form className="add-storage" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            name="name"
            onChange={e => this.handleChange(e)}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Date..."
            name="date"
            onChange={e => this.handleChange(e)}
            value={this.state.date}
          />
          <input
            type="number"
            placeholder="amount..."
            name="amount"
            onChange={e => this.handleChange(e)}
            value={this.state.amount}
          />
          <input
            type="number"
            placeholder="weight..."
            name="weight"
            onChange={e => this.handleChange(e)}
            value={this.state.weight}
          />
        <button type="submit">Add to storage</button>
        </form>
        {this.renderStorage()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
