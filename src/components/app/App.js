import React from 'react';
import { backgroundImage, questions } from '../../config.json';
import Quiz from '../quiz/Quiz';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }
  handlePageNext = (e) => {
    if (this.state.page < questions.length) {
      this.setState({
        page: this.state.page + 1
      })
    }
  }
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url('${window.location.origin}/${backgroundImage}')`}}>
        <Quiz 
          page={this.state.page}
          questions={questions}
          handlePageNext={this.handlePageNext}
        />
      </div>
    );
  }
}

export default App;
