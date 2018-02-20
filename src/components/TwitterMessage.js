import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
