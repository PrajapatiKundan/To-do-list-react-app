import React, { Component } from "react";

class DateClass extends Component {
  state = {};

  render() {
    var today = new Date();
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);
    return (
      <div className="card-header" style={{ fontWeight: "bold" }}>
        <h4>{day}</h4>
      </div>
    );
  }
}

export default DateClass;
