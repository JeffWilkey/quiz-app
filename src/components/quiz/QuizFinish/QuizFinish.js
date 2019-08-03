import React from 'react';
import config from '../../../config.json';
import './QuizFinish.css';

class QuizFinish extends React.Component {
  state = {
    buttonColor: config.buttonColor
  }

  buttonMouseOver = () => {
    this.setState({
      buttonColor: config.buttonHoverColor
    })
  }

  buttonMouseOut = () => {
    this.setState({
      buttonColor: config.buttonColor
    })
  }

  render() {
    return (
      <div>
        <img className="resultsLogo" src={`${window.location.origin}/${config.quizLogo}`} alt={`${config.title} logo`}/>
        <h1 className="resultsHeader">{config.resultsHeader}</h1>
        <div className="questionDivider" style={{ backgroundColor: config.containerAccentColor }}></div>
        <img 
          className="resultsCongratsImage"
          src={`${window.location.origin}/${config.congratsGif}`}
          alt={`${config.title} congratulations gif`}
          style={{ borderColor: config.containerAccentColor }}
        />
        <h2 className="resultsNumbers">You got {this.props.numCorrectAnswers} out of {config.questions.length} right!</h2>
        <button className="startOver" style={{ backgroundColor: this.state.buttonColor, color: config.buttonTextColor }} onClick={this.props.reset}>{config.startOverButtonText}</button>
      </div>
    )
  }
}

export default QuizFinish;