import * as React from "react";
import C3Chart from "react-c3js";
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

    const data = {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 50, 20, 10, 40, 15, 25]
      ]
    };

    return (
      <div>
        {/* <span onClick={this.handleClick} style={{ userSelect: "none" }}>
          {counter} clicks
        </span> */}
        <C3Chart data={data} />
      </div>
    );
  }
}

export default connect((state: ICounterState) => ({ counter: state.counter }), {
  incrementCounter
})(Home);
