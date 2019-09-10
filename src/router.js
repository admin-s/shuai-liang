import React,{Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Main from 'page/main/main.js'
import Login from 'page/login/login.js'
import App from './App'

class Wrouter extends Component{
    render(){
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Route path='/main' component={Main}></Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}

export default Wrouter