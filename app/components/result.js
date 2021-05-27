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

function ResultReducer(state,action){
  if(action.type=='success'){
    return {
      ...state,
      loading:false,
      winner: action.winner,
      loser: action.loser,
    }

  } else if(action.type == 'error'){
    return {
      ...state,
      loading:false,
      error:action.error.message
    }
  }else{
    throw new Error(`This action type isn't supported.`)
  }
}

export default function Result({location}){
  const [state, dispatch] = React.useReducer(
    ResultReducer,
    {error:null, loading:true, winner:{}, loser:{}}
  )
  const { playerOne, playerTwo} = queryString.parse(location.search)
  
  

  React.useEffect(()=> {
    BattleBtn(playerOne, playerTwo)
    .then((data)=> dispatch({
      type:'success',
      winner:data[0],
      loser:data[1],
    }))
    .catch((error)=> dispatch({
      type:'error',
      error: error,
    }))
  },[playerOne, playerTwo])

  if(state.loading === true){
    return <p><Loading /></p>
  }
  if(state.error === ''){
    return <p className='center-text error'>{state.error}</p>
  }

  return (
    <React.Fragment>
      <div className='grid space-around container-sm'>
        <CardBlock 
          header = {state.winner.score === state.loser.score ? 'Tie' : 'Winner'}
          subheader = {state.winner.score.toLocaleString()}
          avatar ={state.winner.profile.avatar_url}
          href = {state.winner.profile.html_url}
          username = {state.winner.profile.login}
        >
          <CardList profile ={state.winner.profile} />  
        </CardBlock>
        <CardBlock
          header = {state.winner.score === state.loser.score ? 'Tie' : 'Winner'}
          subheader = {state.loser.score.toLocaleString()}
          avatar ={state.loser.profile.avatar_url}
          href = {state.loser.profile.html_url}
          username = {state.loser.profile.login}
        >
          <CardList profile ={state.loser.profile} />
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
/*export default class Result extends React.Component{
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
*/

