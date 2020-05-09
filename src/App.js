import React, { Component } from "react";
import DateClass from "./date";
import List from "./list";

class App extends Component {
  state = {
    itemList: [
      { id: 0, value: "breakfast" },
      { id: 1, value: "send email" },
      { id: 2, value: "go to bank" },
    ],
  };

  handleDelete = (index) => {
    const itemList = this.state.itemList.filter(function (element) {
      return index !== element.id;
    });
    this.setState({ itemList });
  };

  handleSubmit = (newValue) => {
    if (newValue !== "") {
      const newItem = {
        id: this.state.itemList.length,
        value: newValue,
      };

      this.setState({
        itemList: [...this.state.itemList, newItem],
      });
    } else {
      alert("Please add Item!");
    }
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem", margin: "100px auto" }}>
        <DateClass />
        <List
          itemList={this.state.itemList}
          removeItem={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
