import { is,fromJS } from 'immutable';

export default function (nextProps, nextState){
	// console.log(nextProps)
	// console.log(this.props)
	// console.log(nextState)
	// console.log(this.state)
	let propsIsChange = true;
	let stateIsChange = true;

	
	const $thisProps = fromJS(this.props||{});
    const $nextProps = fromJS(nextProps||{});
	if(is($thisProps,$nextProps)){
		propsIsChange = false;
	}else{
		propsIsChange = true;
	}
	

	
	const $thisState = fromJS(this.state||{});
 	const $nextState = fromJS(nextState||{});
 	if(is($thisState,$nextState)){
 		stateIsChange = false;
 	}else{
 		stateIsChange = true;
 	}
	
	// console.log('stateIsChange',stateIsChange)
	// console.log('propsIsChange',propsIsChange)
	if(stateIsChange||propsIsChange){
		return true;
	}else{
		return false;
	}
}