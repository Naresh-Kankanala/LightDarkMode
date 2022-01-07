import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLight: 'Light mode',
    background: 'dark-background',
    textColor: 'light',
  }

  onClickFunction = () => {
    const {isLight, background, textColor} = this.state
    if (isLight === 'Light mode') {
      this.setState(prevState => ({
        isLight: 'Dark mode',
        background: 'light-background',
        textColor: 'dark',
      }))
    } else {
      this.setState(prevState => ({
        isLight: 'Light mode',
        background: 'dark-background',
        textColor: 'light',
      }))
    }
  }

  render() {
    const {isLight, background, textColor} = this.state
    return (
      <div className="main-container">
        <div className={`mode-container ${background}`}>
          <h1 className={`title ${textColor}`}>Click To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.onClickFunction}
          >
            {isLight}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
