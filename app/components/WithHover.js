import React, { Children } from 'react'
import PropTypes from 'prop-types'

export default function WithHover (Component, propName = 'hovering'){

  return class WithHover extends React.Component {
    
    constructor (props) {
      super(props)
  
      this.state = {
        hovering: false
      }
  
      this.mouseOverHandler = this.mouseOverHandler.bind(this)
      this.mouseOutHandler = this.mouseOutHandler.bind(this)
    }

    mouseOverHandler (){
      this.setState({
        hovering: true
      })
    }
  
    mouseOutHandler (){
      this.setState({
        hovering: false
      })
    }
    render (){
      const props ={
        [propName]: this.state.hovering,
        ...this.props
      }
      return (
        <div
          onMouseOut = {this.mouseOutHandler}
          onMouseOver = {this.mouseOverHandler}
        >
          <Component {...props} />
        </div>
      )
    }
  }

}