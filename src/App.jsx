import { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Notification } from "./components/Notification/Notification";

class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivie: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  countTotalFeedback = () => {
    this.setState((state) => ({
      ...state,
      total: state.good + state.neutral + state.bad,
    
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      ...state,
      positive: Math.round((state.good / state.total) * 100),
    }));
  };

  goodIncrement = () => {
    this.setState((state) => ({ ...state, good: state.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  badIncrement = () => {
    this.setState((state) => ({ ...state, bad: state.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralIncrement = () => {
    this.setState((state) => ({ ...state, neutral: state.neutral + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
        <FeedbackOptions
        onLeaveFeedback={"Good"}
        options={this.goodIncrement}
        ></FeedbackOptions>
        <FeedbackOptions
        onLeaveFeedback={"Neutral"}
        options={this.neutralIncrement}
        ></FeedbackOptions>
        <FeedbackOptions
        onLeaveFeedback={"Bad"}
        options={this.badIncrement}
        ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
              <Statistics
                good={this.state.good}
                bad={this.state.bad}
                neutral={this.state.neutral}
                total={this.state.total}
                positivePercentage={this.state.positive}>
              </Statistics>
        )}
        </Section>
      </div>

    )
  }
}

export default App;
