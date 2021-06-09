import { Component } from "react";
import Button from "@material-ui/core/Button";
class Felipe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props, 'felipe');
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  felipe() {
    this.setState((state) => {
      console.log(state)
      return {
        counter: state.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>{this.state.timerID}</h3>
        <h3>{JSON.stringify(this.state)}</h3>
        <Felipe name={"felip2e"} />
        <button onClick={() => this.felipe()}>change counter</button>
      </div>
    );
  }
}

export default Clock;
