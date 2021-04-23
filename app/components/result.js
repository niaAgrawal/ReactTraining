import React from 'react'
import PropTypes from 'prop-types'
import {BattleBtn} from '../utils/fetchPopularRepos'
import CardBlock from './CardBlock'
import Battle from './Battle'
import Loading from './Loading'
import Tooltip from './Tooltip'
import queryString from 'query-string'
import { Link } from 'react-router-dom'


function CardList ({profile}) {
  return (
    <ul className='card-list'>
      <li>
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <Tooltip text="User's location">
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's Company">
            {profile.company}
            </Tooltip>
        </li>
      )}
      <li>
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  )

}

CardList.propTypes = {
  profile: PropTypes.object.isRequired
}


export default class Result extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      winner: null,
      loser: null,
      error: '',
      loading: true,
      
    }
    //this.resetHandler = this.resetHandler.bind(this)
  }
  componentDidMount (){
    const { playerOne, playerTwo} = queryString.parse(this.props.location.search)
    BattleBtn(playerOne, playerTwo)
    .then((data)=> {
      console.log('inside result');
      console.log('data ',data)
      this.setState({
        winner: data[0],
        loser: data[1],
        error: null,
        loading: false
      })
    }).catch((err)=>{
      this.setState({
        error: message,
        loading: false
      })
    })
  }

  render (){
    const { winner, loser, error, loading, reset} = this.state

    if(loading === true){
      return <p><Loading /></p>
    }
    if(error === ''){
      return <p className='center-text error'>{error}</p>
    }

    if(reset === true){
      return <Battle />
    }

    return (
      <React.Fragment>
        <div className='grid space-around container-sm'>
          <CardBlock 
            header = {winner.score === loser.score ? 'Tie' : 'Winner'}
            subheader = {winner.score.toLocaleString()}
            avatar ={winner.profile.avatar_url}
            href = {winner.profile.html_url}
            username = {winner.profile.login}
          >
            <CardList profile ={winner.profile} />  
          </CardBlock>
          <CardBlock
            header = {winner.score === loser.score ? 'Tie' : 'Winner'}
            subheader = {loser.score.toLocaleString()}
            avatar ={loser.profile.avatar_url}
            href = {loser.profile.html_url}
            username = {loser.profile.login}
          >
            <CardList profile ={loser.profile} />
          </CardBlock>
        </div>
        <Link 
          to='/battle'
          className='btn dark-btn btn-space'
        >
          Reset
        </Link>
      </React.Fragment>
      
    )
  }
}


