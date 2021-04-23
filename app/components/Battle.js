import React from 'react'
//import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Result from './result'
import {ThemeConsumer} from '../context/Theme'
import {Link} from 'react-router-dom'

function Instructions () {
  return (
    <ThemeConsumer>
      {({theme})=>(
          <div className='instructions-container'>
            <h1 className='center-text header-lg'>
              Instructions
            </h1>
            <ol className='container-sm grid center-text battle-instructions'>
              <li>
                <h3 className='header-sm'>Enter two Github users</h3>
                <div className={`bg-${theme}`} style={{backgroundColor: 'green', padding:'50px',border:'1px solid red',marginRight:'10px'}}>Block 1</div>
              </li>
              <li>
                <h3 className='header-sm'>Battle</h3>
                <div className={`bg-${theme}`} style={{backgroundColor: 'orange', padding:'50px',border:'1px solid red' ,marginRight:'10px'}}>Block 2</div>
              </li>
              <li>
                <h3 className='header-sm'>See the winners</h3>
                <div className={`bg-${theme}`} style={{backgroundColor: 'blue', padding:'50px',border:'1px solid red'}}>Block 3</div>
              </li>
            </ol>
          </div>
        )} 
    </ThemeConsumer>
  )
}


class PlayerInput extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      username : ''
    }
     this.onChangeHandler = this.onChangeHandler.bind(this)
     this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler (event) {
    this.setState({
      username: event.target.value
    })
  }

  onSubmitHandler (){
    event.preventDefault()

    this.props.onSubmit(this.state.username)
  }

  render () {
    return (
      <ThemeConsumer>
        {({theme}) => (
          <form className= 'column player' onSubmit={this.onSubmitHandler}>
          <label htmlFor='username' className='player-label'>
            {this.props.label}
          </label>
          <div className='row player-inputs'>
            <input 
              type='text'
              id='username'
              className={`input-${theme}`}
              placeholder='github username'
              autoComplete ='off'
              value = {this.state.username}
              onChange ={this.onChangeHandler}
            />
            <button
              className='btn btn-dark'
              disabled={!this.state.username}
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
        )}
        </ThemeConsumer>
    )
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}



function PlayerPreview ({ username, onReset, label }) {
  return (
    <ThemeConsumer>
      {({theme})=>(
        <div className='column player'>
          <h3 className='player-label'>{label}</h3>
          <div className={ `row bg-${theme}`}>
            <div className='player-info'>
              <img
                className='avatar-small'
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
              <a
                href={`https://github.com/${username}`}
                className='link'>
                  {username}
              </a>
            </div>
            <button className='btn-clear flex-center' onClick={onReset}>
              XX
            </button>
          </div>
        </div>
      )}
    </ThemeConsumer>
    
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}



export default class Battle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOne : null,
      playerTwo : null,
      battleFlag : false
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.battleHander = this.battleHander.bind(this)
  }
  submitHandler (id, player) {
    this.setState({
      [id]:player
    })
  }

  resetHandler (id) {
    this.setState ({
      [id]:null
    })
  }

  battleHander (){
    this.setState({
      battleFlag: true
    })
  }
  render () {
    const { playerOne, playerTwo, battleFlag} = this.state
    return (
      <React.Fragment>
        <div>
            <Instructions />
            <div className='row space-around'>
              <h3>Player</h3>
              { playerOne === null ? 
                (<PlayerInput label ='Player One' onSubmit={(player)=> this.submitHandler('playerOne', player)} />)
                : 
                (<PlayerPreview username= {playerOne} label='Player One' onReset = {()=> this.resetHandler('playerOne')} />)
              }
              { playerTwo === null ? 
                (<PlayerInput label ='Player Two' onSubmit={(player)=> this.submitHandler('playerTwo', player)} />)
                : 
                (<PlayerPreview username= {playerTwo} label='Player Two' onReset = {()=> this.resetHandler('playerTwo')} />)
              }
              
            </div>
            
            {playerOne && playerTwo &&
                <Link 
                to ={{
                  pathname: '/battle/result',
                  search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                }}
                className='btn dark-btn btn-space'
                >
                  Battle
                </Link>
            }
          </div>
      
      </React.Fragment>
    )
  }
}