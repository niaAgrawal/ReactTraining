import React from 'react'

/*export default class Hover extends React.Component {

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

  render () {
    return (
      <div
        onMouseOver ={this.mouseOverHandler}
        onMouseOut = {this.mouseOutHandler}
      >
        {this.props.render(this.state.hovering)}
      </div>
    )
  }
}
*/

export default function useHover (){
  const [hovering, setHovering] = React.useState(false)

  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)

  const opt = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut
  }
  return [hovering, opt]
}