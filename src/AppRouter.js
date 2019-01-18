import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import IndexTest from './components/IndexTest';
export default class AppRouter extends Component{
	render(){
		return  <Router>
					<App>
						<Route exact path="/" component={Login}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/home" render={({match})=>{
							let token = true;
							if(token){
								let pathBase = match.path;
								return (<Router>
									<Home>
										<Switch>
											<Route exact path={pathBase} component={IndexTest}/>
											<Route path={pathBase+"/organizations"} component={IndexTest}/>
										</Switch>
									</Home>
								</Router>)
							}else{
								return (
									<Redirect to="/login"/>
								)
							}
						}}></Route>
					</App>
				</Router>
	}
}









