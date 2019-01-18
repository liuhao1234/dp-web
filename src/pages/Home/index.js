import React,{Component} from 'react';
import './index.styl';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

class Home extends Component{
	render() {
		//console.log(this)
		return (
			<div className="root_wraper">
				<Header />
				<Sidebar>
					{this.props.children}
				</Sidebar>
			</div>
		);
	}
}

export default Home;