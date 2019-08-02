import React from 'react';
import config from '../../config.json';
import QuizEntry from './QuizEntry/QuizEntry';
import QuizQuestion from './QuizQuestion/QuizQuestion';
import './Quiz.css';

class Quiz extends React.Component {
  render() {
    return (
      <div className="quizContainer" style={{ backgroundColor: config.containerColor }}>
        {this.props.page === 0 ?
          <QuizEntry handlePageNext={this.props.handlePageNext}/>
          :
          <QuizQuestion page={this.props.page} handlePageNext={this.props.handlePageNext} />
        }
      </div>
    );
  }
}

export default Quiz;