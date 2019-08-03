import React from 'react';
import { backgroundImage, questions } from '../../config.json';
import Quiz from '../quiz/Quiz';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      numCorrectAnswers: 0,
      numIncorrectAnswers: 0
    }
  }
  handlePageNext = () => {
    if (this.state.page < questions.length + 1) {
      this.setState({
        page: this.state.page + 1
      })
    }
  }

  handleAnswerSubmission = (validAnswer) => {
    // console.log(validAnswer);
    if (validAnswer) this.setState({ numCorrectAnswers: this.state.numCorrectAnswers + 1 })
    else this.setState({ numIncorrectAnswers: this.state.numIncorrectAnswers + 1 })
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url('${window.location.origin}/${backgroundImage}')`}}>
        <Quiz 
          page={this.state.page}
          questions={questions}
          handlePageNext={this.handlePageNext}
          numCorrectAnswers={this.state.numCorrectAnswers}
          numIncorrectAnswers={this.state.numIncorrectAnswers}
          handleAnswer={this.handleAnswer}
          handleAnswerSubmission={this.handleAnswerSubmission}
        />
      </div>
    );
  }
}

export default App;
