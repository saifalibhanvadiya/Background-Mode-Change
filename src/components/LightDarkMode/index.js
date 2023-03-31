// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {bgColor: 'bgDark', btnText: 'Light Mode'}

  ChangeBackground = () => {
    const {bgColor, btnText} = this.state
    if (btnText === 'Light Mode') {
      return this.setState({btnText: 'Dark Mode', bgColor: 'bgLight'})
    }
    return this.setState({btnText: 'Light Mode', bgColor: 'bgDark'})
  }

  render() {
    const {bgColor, btnText} = this.state
    return (
      <div className="Container">
        <div className={` card ${bgColor}`}>
          <h1>Click To Change Mode</h1>
          <button className="btn" onClick={this.ChangeBackground}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
