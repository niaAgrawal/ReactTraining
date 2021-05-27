import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { ThemeContext } from './context/Theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'



//component
//state
//lifecysle
//ui

const Popular = React.lazy(()=>import('./components/Popular'))
const Battle = React.lazy(()=>import('./components/Battle'))
const Result = React.lazy(()=>import('./components/result'))

/*class Apps extends React.Component{

  constructor (props){
    super(props)

    this.state = {
      theme : 'light',
      toggleTheme: () => {
        this.setState(({ theme })=>({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Popular} />
                  <Route exact path ='/battle' component={Battle} />
                  <Route path ='/battle/result' component={Result} />
                  <Route render={()=> <h2>404</h2>}/>
                </Switch>
              </React.Suspense>
              
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}
*/


function Apps (){
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => setTheme((theme)=> theme === 'light' ? 'dark' : 'light')
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme={toggleTheme}/>
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path ='/battle' component={Battle} />
                <Route path ='/battle/result' component={Result} />
                <Route render={()=> <h2>404</h2>}/>
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  )
}
ReactDOM.render(<Apps />, document.getElementById('app'));