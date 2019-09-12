import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Main from 'page/main/main.js'
import Login from 'page/login/login.js'
import Food from 'page/food/food.js'
import User from 'page/user/user.js'
import App from './App'

class Wrouter extends Component{
    render(){
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/main'></Redirect>
                        <Route path='/main' render={()=>{
                            return(
                                <Main>
                                    <Route path='/main/food' component={Food}></Route>
                                    <Route path='/main/user' component={User}></Route>
                                </Main>
                            )
                        }}></Route>
                        <Route path='/login' component={Login}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}

export default Wrouter