import {FETCH_MARVEL_REQUEST,FETCH_MARVEL_SUCCESS} from './searchTypes';

const initialState = {
    details:[],
    lastFiveSearchTerm:[],
    bool:false
}


const reducer = (state = initialState,action)=>{
    console.log(action);
    switch(action.type){
        case FETCH_MARVEL_REQUEST: 
            return {
                ...state
            }

        case FETCH_MARVEL_SUCCESS:
            return {
                details:action.payload,

            }
       

        default: return state;
    }

}
export default reducer