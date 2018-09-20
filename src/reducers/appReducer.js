import { REQUEST_NEWS, LOADING } from '../actions/types';

INITIAL_STATE = {
    news: [],
    loading: false

}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case REQUEST_NEWS:
            return  {...state, news: action.payload, loading: false }
        case LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}