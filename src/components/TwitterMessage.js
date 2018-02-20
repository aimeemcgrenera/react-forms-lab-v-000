import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  
  maxChars = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text" 
        value={this.state.value} 
        onChange={this.maxChars}
        />
      </div>
    );
  }
}

export default TwitterMessage;
