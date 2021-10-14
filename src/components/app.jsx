import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: props.header,
      text: 'Type a Color!',
      color: ' ',
      hasLoaded: false
    }
  }

  handleInputChange = (event) => {
    this.setState({ color: event.target.value })
  }

  handleButtonClick = () => {
    this.setState(previousState => ({ 
      hasLoaded: !previousState.hasLoaded 
    }))
  }

  componentDidMount = () => {
    this.setState({ hasLoaded: true })
  }

  render() {
    if (this.state.hasLoaded === true) {
      return(
        <React.Fragment>
          <h1 style={ {color: this.state.color} }>
            { this.state.header + ', ' + this.state.text }
          </h1>
          <input 
            type="text"
            placeholder={ this.state.text }
            onChange={ this.handleInputChange }
          />
          <button onClick={ this.handleButtonClick }>Click Me</button>
        </React.Fragment>
      )
    } else {
      return(
        <React.Fragment>
          <h1 className="loading-header">Loading...</h1>
          <button onClick={ this.handleButtonClick }>Click Me</button>
        </React.Fragment>
      )
    }
  }
}

export default App;