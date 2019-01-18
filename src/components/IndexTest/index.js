import React,{ Component,Fragment } from 'react';
import shouldComponentUpdate from '../../common/shouldComponentUpdate';

export default class IndexTest extends Component{
	constructor(props){
		super(props);
		this.shouldComponentUpdate = shouldComponentUpdate;
	}
	render(){
		return <Fragment>
			
		</Fragment>
	}
}