import React from 'react';
import config from '../../../config.json';
import './QuizQuestion.css';

class QuizQuestion extends React.Component {
  state = {
    buttonColor: config.buttonColor
  }

  buttonMouseOver = () => {
    this.setState({ buttonColor: config.buttonHoverColor })
  }

  buttonMouseOut = () => {
    this.setState({ buttonColor: config.buttonColor })
  }

  renderAnswers = () => {
    return config.questions[this.props.page - 1].answers.map((answer, index) => {
      return (
        <div key={answer}>
          <input type="radio" name="question" value={index}/>
          <label className="answer">{answer}</label>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <p className="questionIndex">Question {this.props.page} out of {config.questions.length}</p>
        <p className="questionCurrentScore">
          <span style={{ color: config.questionScoreCorrectColor }}>{this.props.numCorrectAnswers} correct</span> |&nbsp;
          <span style={{ color: config.questionScoreIncorrectColor }}>{this.props.numIncorrectAnswers} incorrect</span>
        </p>
        <div className="questionDivider" style={{ backgroundColor: config.containerAccentColor }}></div>
        <img 
          className="questionImage"
          src={config.questions[this.props.page - 1].img} alt={`for question ${this.props.page - 1}`}
          style={{ borderColor: config.containerAccentColor }}
        />
        <div className="questionFormWrap">
          <form className="questionForm">
            <fieldset className="questionFieldset">
              <legend className="questionLegend">
                {config.questions[this.props.page - 1].body}
              </legend>
              <div className="questionDivider" style={{ backgroundColor: config.containerAccentColor }}></div>
              {this.renderAnswers()}
              <button 
                className="questionSubmit"
                type="submit"
                style={{ backgroundColor: this.state.buttonColor, color: config.buttonTextColor }}
                onMouseOver={this.buttonMouseOver}
                onMouseOut={this.buttonMouseOut}
              >
                {config.submitText}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default QuizQuestion;