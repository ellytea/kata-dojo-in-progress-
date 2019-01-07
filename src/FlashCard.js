import React, {Component} from 'react';

class FlashCard extends Component {
  constructor(props) {
    super()
  }


  render() {
    return (
      <section className="flash-card">
        <p>Flash Card</p>
        <p>{this.props.description}</p>
        {
          this.props.cardButtons.map((item) => {
            return <button>{item}</button>
          })
        }
      </section>
      )
  }
}

export default FlashCard;