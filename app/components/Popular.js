import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/fetchPopularRepos'
import CardBlock from './CardBlock'
import Loading from './Loading'
import Tooltip from './Tooltip'
//import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'

function LanguageList ({selected, onUpadateHandler}) {
  
  const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'CSS', 'Python'];
    return(
      <ul className="flex-center">
        {languages.map((lng)=> (
          <li key={lng} >
            <button 
              className="btn-clear nav-link"
              style = { lng === selected ? {color:'red'} : null}
              onClick ={() => onUpadateHandler(lng)}
            >
              {lng}
            </button>
          </li>
        ))}
      </ul>
    )
}

LanguageList.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpadateHandler: PropTypes.func.isRequired 
}

function GridViewPopularRepos ({repos}) {
  
  return (
    <ul className='grid space-around'>
      { repos.map((repo,i)=> {
        const { id, name, owner, html_url, stargazers_count, forks, open_issues } = repo
        const { login, avatar_url } = owner
        return (
          
          <li className="prod-cards bg-light" key={id}>
            <CardBlock
              header = {`#${i + 1}`}
              avatar ={avatar_url}
              href = {html_url}
              username = {login}
            >
              <ul className='card-list'>
                <li>
                  <Tooltip text="Github username">
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </Tooltip>
                </li>
                <li>
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </CardBlock>
          </li>
        )
        })}
    </ul>
  )
}
GridViewPopularRepos.propTypes = {
  repos: PropTypes.array.isRequired
}


export default class Popular extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectlng : 'All',
      error: null,
      repos: {}
    }
    this.updateLng = this.updateLng.bind(this)
    this.isLoading = this.isLoading.bind(this)
    
  }

  componentDidMount (){
    this.updateLng(this.state.selectlng)
  }

  updateLng (selectlng) {
    this.setState ({
      selectlng,
      error: null
    })

    fetchPopularRepos(this.state.selectlng)
      .then((data)=>{
        this.setState(({repos})=>(
          {
            repos: {
              repos,
              [selectlng] : data
            }
          }
        ))
      })
      .catch((err)=>{
        this.setState({
          error: err
        })
      })
  }

  
  isLoading (){
    const {selectlng, repos, error} = this.state
    return !repos[selectlng] && this.state.error === null
  }
  render (){
    const { selectlng } = this.state
    return (
      <React.Fragment>
        <LanguageList 
          selected = {selectlng}
          onUpadateHandler = {this.updateLng}
        />
        {this.isLoading() && <p><Loading /></p>}
        {this.state.error && <p>Error while fetching the repos</p>}

        {this.state.repos[this.state.selectlng] && <GridViewPopularRepos repos = {this.state.repos[selectlng]}/>}
      </React.Fragment>
    )
    
  }
}
