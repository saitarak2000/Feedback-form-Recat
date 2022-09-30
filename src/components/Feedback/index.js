// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {showgrat: false}

  showGratitude = () => {
    this.setState({showgrat: true})
  }

  render() {
    const {showgrat} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    // console.log(loveEmojiUrl)
    // console.log(resources.emojis)
    const result = resources.emojis

    return (
      <div className="main-container">
        <div className="inside-container">
          {showgrat ? (
            <div className="feedback">
              <img className="love" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="heading">Thank You</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emojies">
                {result.map(eachitem => (
                  <li onClick={this.showGratitude} key={eachitem.id}>
                    <img
                      className="emoji"
                      src={eachitem.imageUrl}
                      alt={eachitem.name}
                    />
                    <p>{eachitem.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
