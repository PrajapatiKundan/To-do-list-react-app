import React, { Component } from "react";

//function component---------------------------------------------------------------------------------------
const Item = (props) => {
  console.log("item : ", props);
  const rows = props.itemList.map(function (element) {
    return (
      <li className="list-group-item" key={element.id}>
        <input type="checkbox" className="mr-4" />
        {element.value}
        <button
          className="btn btn-sm float-right "
          onClick={() => props.removeItem(element.id)}
        >
          <i className="fas fa-trash-alt float-right"></i>
        </button>
      </li>
    );
  });

  return <div>{rows}</div>;
};

//Class component-------------------------------------------------------------------------------------
class List extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <ul className="list-group list-group-flush">
        <Item
          itemList={this.props.itemList}
          removeItem={this.props.removeItem}
        />
        <li className="list-group-item">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            name="value"
            placeholder=" Add Item"
          />
          <button
            type="submit"
            className="btn btn-primary btn-sm float-right"
            onClick={this.onSubmit}
          >
            <i className="fas fa-plus"></i>
          </button>
        </li>
      </ul>
    );
  }
}

export default List;
