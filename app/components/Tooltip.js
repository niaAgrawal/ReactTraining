import React, { Children } from 'react'
import PropTypes from 'prop-types'
//import WithHover from './WithHover'
import useHover from './Hover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

/*export default class Tooltip extends React.Component {

  constructor (props){
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

  render() {
    const { text, children} = this.props
    const {hovering} = this.state

    return (
      <div
        onMouseOut = {this.mouseOutHandler}
        onMouseOver = {this.mouseOverHandler}
        style = {styles.container}
      >
       {hovering === true && <div style={styles.tooltip}>{text}</div>}
       {children}
      </div>
    )
  }
}
*/


// This is for HOC
/*function Tooltip ({ text, children, hovering}){
  return (
    <div  style = {styles.container}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  )
}
*/


// This is for Render Props

/*export default class Tooltip extends React.Component {

  render (){
    const {text, children} = this.props
    return(
      <Hover render = {(hovering)=> (
        <div style={styles.container}>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
      />
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}
*/

// This is for HOC
//export default WithHover(Tooltip, 'hovering')


export default function Tooltip({text, children}){
  const [hovering, opt] = useHover()
  return(
    <div style={styles.container} {...opt}>
      {hovering === true && <div style={styles.tooltip} >{text}</div>}
      {children}
    </div>
  )
}
