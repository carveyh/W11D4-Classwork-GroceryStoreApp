import produceData from '../mockData/produce.json';

// THIS WON'T WORK:
// import * as produceData from '../mockData/produce.json';

const POPULATE = "produce/POPULATE";

// Action creator:
export function populateProduce(){
	return {
		type: POPULATE,
		produce: produceData
	}
}

// Reducer
export default function produceReducer(state = {}, action) {
	Object.freeze(state);
	switch(action.type) {
		case POPULATE:
			let newState = {};
			action.produce.forEach(item => {
				newState[item.id] = item;
			})
			return newState;
		default:
			return state;
	}
}