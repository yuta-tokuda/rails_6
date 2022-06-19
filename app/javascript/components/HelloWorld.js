import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        はじめてのReact: {this.props.text}
        <p>hogehoge</p>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  text: PropTypes.string
};
export default HelloWorld
