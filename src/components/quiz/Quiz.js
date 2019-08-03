import React from 'react';
import config from '../../config.json';
import QuizEntry from './QuizEntry/QuizEntry';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import QuizFinish from './QuizFinish/QuizFinish';
import './Quiz.css';

class Quiz extends React.Component {
  renderQuizDisplay = () => {
    if (this.props.page === 0) {
      return <QuizEntry handlePageNext={this.props.handlePageNext}/>
    } else if (this.props.page !== config.questions.length + 1) {
      return (
        <QuizQuestion 
          page={this.props.page}
          handlePageNext={this.props.handlePageNext}
          numCorrectAnswers={this.props.numCorrectAnswers}
          numIncorrectAnswers={this.props.numIncorrectAnswers}
          handleAnswer={this.props.handleAnswer}
          handleAnswerSubmission={this.props.handleAnswerSubmission}
        />
      )
    } else {
      return <QuizFinish numCorrectAnswers={this.props.numCorrectAnswers} reset={this.props.reset}/>
    }
  }
  render() {
    return (
      <div className="quizContainer" style={{ backgroundColor: config.containerColor }}>
        {this.renderQuizDisplay()}
      </div>
    );
  }
}

export default Quiz;