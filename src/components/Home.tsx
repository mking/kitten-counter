import * as React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "../actions/counter";
import { ICounterState, IIncrementCounterAction } from "../reducers/counter";

export interface IHomeProps {
  counter: number;
  incrementCounter: () => IIncrementCounterAction;
}

class Home extends React.Component<IHomeProps> {
  public handleClick = () => {
    this.props.incrementCounter();
  };

  public render() {
    const { counter } = this.props;

    return (
      <div>
        <span onClick={this.handleClick} style={{ userSelect: "none" }}>
          {counter} clicks
        </span>
      </div>
    );
  }
}

export default connect((state: ICounterState) => ({ counter: state.counter }), {
  incrementCounter
})(Home);
