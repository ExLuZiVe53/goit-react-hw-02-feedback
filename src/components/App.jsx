import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeOfState = clickBtnGood => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h2 className="title-feedback">Please leave feedback</h2>
        <button onClick={event.target.value} type="button" className="btn-good">
          Good
        </button>
        <button
          onClick={evt => {
            console.log('Cliked in btn-neutral!', evt); // працює
          }}
          type="button"
          className="btn-neutral"
        >
          Neutral
        </button>
        <button
          onClick={evt => {
            console.log('Cliked in btn-bed!', evt); // працює
          }}
          type="button"
          className="btn-bad"
        >
          Bad
        </button>
        <h2 className="title-statistics">Statistics</h2>
        <p className="good">
          Good:
          <span className="number-good">3</span>
        </p>
        <p className="neutral">
          Neutral:
          <span className="number-neutral">2</span>
        </p>
        <p className="bad">
          Bad:
          <span className="number-bad">2</span>
        </p>
      </div>
    );
  }
}
