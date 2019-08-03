import React from 'react';
import config from '../../../config.json';
import './QuizQuestion.css';

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.page,
      buttonColor: config.buttonColor,
      submitButtonClicked: false,
      questionAnswered: false,
      selectedAnswer: null,
      answerCorrect: null,
      showAnswerResponse: null
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.page !== this.props.page) {
      this.setState({
        questionAnswered: false
      })
    }
  }

  buttonMouseOver = () => {
    this.setState({ buttonColor: config.buttonHoverColor })
  }

  buttonMouseOut = () => {
    this.setState({ buttonColor: config.buttonColor })
  }

  setAnswer = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    });
  }

  handleAnswerSubmission = (e) => {
    e.preventDefault();

    let currentQuestion = config.questions[this.props.page - 1];
    let answerCorrect;
    
    if (this.state.selectedAnswer && Number(this.state.selectedAnswer) === Number(currentQuestion.correctAnswerIndex)) answerCorrect = true;
    else answerCorrect = false;

    if (answerCorrect === null) this.setState({ showAnswerResponse: "none" })
    else if (answerCorrect === true) this.setState({ showAnswerResponse: "correct" })
    else this.setState({ showAnswerResponse: "incorrect"})

    // this.props.handleAnswer(e);
    this.setState({
      submitButtonClicked: true,
      questionAnswered: true,
      answerCorrect
    });
    if (this.state.selectedAnswer && answerCorrect !== null) {
      console.log('answer submitted');
      this.setState({
        currentPage: this.props.page,
        submitButtonClicked: false,
        selectedAnswer: null,
        answerCorrect: null
      });
      this.props.handleAnswerSubmission(answerCorrect);
    }
  }

  renderAnswers = () => {
    return config.questions[this.props.page - 1].answers.map((answer, index) => {
      return (
        <div key={answer}>
          <input type="radio" name="question" value={index} onClick={this.setAnswer}/>
          <label className="answer">{answer}</label>
        </div>
      )
    })
  }

  renderAnswerResponseText = (currentQuestion) => {
    if (this.state.currentPage === this.props.page) {
      if (this.state.showAnswerResponse === "correct") return (<p className="answerResponse" style={{ color: config.questionScoreCorrectColor }}>{config.correctAnswerText}</p>)
      else if (this.state.showAnswerResponse === "incorrect") return (<p className="answerResponse" style={{ color: config.questionScoreIncorrectColor }}>{config.incorrectAnswerText} <strong>{currentQuestion.answers[currentQuestion.correctAnswerIndex]}</strong></p>)
      else if (this.state.showAnswerResponse === "none") return (<p className="answerResponse" style={{ color: config.questionScoreWarningColor}}>{config.questionNotAnsweredText}</p>);
    }
  }

  render() {
    let currentQuestion = config.questions[this.props.page - 1];
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
          src={currentQuestion.img} alt={`for question ${this.props.page - 1}`}
          style={{ borderColor: config.containerAccentColor }}
        />
        <div className="questionFormWrap">
          <form className="questionForm" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="questionFieldset">
              <legend className="questionLegend">
                {currentQuestion.body}
              </legend>
              <div className="questionDivider" style={{ backgroundColor: config.containerAccentColor }}></div>
              {this.renderAnswers()}
              {this.renderAnswerResponseText(currentQuestion)}
              {!this.state.questionAnswered ?
                <button 
                  className="questionSubmit"
                  style={{ backgroundColor: this.state.buttonColor, color: config.buttonTextColor }}
                  onMouseOver={this.buttonMouseOver}
                  onMouseOut={this.buttonMouseOut}
                  onClick={this.handleAnswerSubmission}
                >
                  {config.submitText}
                </button>
                :
                <button
                  className="questionSubmit"
                  style={{ backgroundColor: this.state.buttonColor, color: config.buttonTextColor }}
                  onMouseOver={this.buttonMouseOver}
                  onMouseOut={this.buttonMouseOut}
                  onClick={this.props.handlePageNext}
                >
                  {config.nextButtonText}
                </button>
              }
              
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default QuizQuestion;