import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeOfStateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  changeOfStateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  changeOfStateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const Total = this.countTotalFeedback();
    const GoodPercentFeedback = this.countPositiveFeedbackPercentage();
    console.log('this.state :>> ', this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
        className="wrapper"
      >
        <h2 className="title-feedback">Please leave feedback</h2>
        <button
          onClick={this.changeOfStateGood}
          type="button"
          className="btn-good"
        >
          Good
        </button>
        <button
          onClick={this.changeOfStateNeutral}
          type="button"
          className="btn-neutral"
        >
          Neutral
        </button>
        <button
          onClick={this.changeOfStateBad}
          type="button"
          className="btn-bad"
        >
          Bad
        </button>
        <h2 className="title-statistics">Statistics</h2>
        <p className="good">
          Good:
          <span className="number-good">{this.state.good}</span>
        </p>
        <p className="neutral">
          Neutral:
          <span className="number-neutral">{this.state.neutral}</span>
        </p>
        <p className="bad">
          Bad:
          <span className="number-bad">{this.state.bad}</span>
        </p>
        <p className="total">
          Total:<span className="total-number">{Total}</span>
        </p>
        <p className="positive-feedback">
          Positive feedback:
          <span className="positive-feedback-persent">
            {GoodPercentFeedback}%
          </span>
        </p>
      </div>
    );
  }
}
