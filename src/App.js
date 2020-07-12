import React from "react";
import quizService from "./quizService";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionBank: [],
    };
  }

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className='App'>
        <div className=''>
          <div className='title'>Quiz App</div>
          {this.state.questionBank.length > 0 && this.state.questionBank.map(({ question, answers, correct, questionId}) => (
            <h3>{question}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
