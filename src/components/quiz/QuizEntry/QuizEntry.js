import React from 'react';
import config from '../../../config.json';
import './QuizEntry.css';

class QuizEntry extends React.Component {
  state = {
    buttonColor: config.buttonColor
  }

  buttonMouseOver = () => {
    this.setState({ buttonColor: config.buttonHoverColor })
  }

  buttonMouseOut = () => {
    this.setState({ buttonColor: config.buttonColor })
  }


  render() {
    return (
      <div>
        <img className="quizLogo" src={`${window.location.origin}/${config.quizLogo}`} alt={`${config.title} logo`} />
        <h1 className="quizTitle" style={{ color: config.titleColor }}>{config.title}</h1>
        <p className="quizSubtext" style={{ color: config.subtextColor }}>
          {config.subtext}
          <br/>
          {config.subtext2}
        </p>
        <button
          className="quizStart"
          style={{ color: config.buttonTextColor, backgroundColor: this.state.buttonColor }}
          onMouseOver={this.buttonMouseOver}
          onMouseOut={this.buttonMouseOut}
          onClick={this.props.handlePageNext}
        >
          {config.startButtonText}
        </button>
      </div>
    )
  }
}

export default QuizEntry;