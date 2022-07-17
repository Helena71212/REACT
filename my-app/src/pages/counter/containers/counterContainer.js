import React, { PureComponent } from "react";

import Counter from "../components/counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      countValue: 0,
      isEven: true
    };
  }
  countEven = (num) => num % 2 === 0;

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;
      return {
        countValue: incrementedValue,
        isEven:this.countEven(incrementedValue)
      };
    });
  };
  handleReset = () => {
    this.setState({ countValue: 0, isEven: true});
  };

  handleDecrement =()=> {
    this.setState((state)=>{
      const decrementedValue= state.countValue>0? state.countValue -1: 0;
      return{
        countValue:decrementedValue,
        isEven:this.countEven(decrementedValue)
      }
    }
    )
  }
  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        isEven= {this.state.isEven}
        onReset={this.handleReset}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      />
    );
  }
}
export default CounterContainer;
