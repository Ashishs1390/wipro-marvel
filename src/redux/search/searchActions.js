import axios from 'axios';
import {FETCH_MARVEL_REQUEST,FETCH_MARVEL_SUCCESS} from './searchTypes';

export const fetchDetailsRequest = () =>{
    return {
        type:FETCH_MARVEL_REQUEST
    }
}

export const fetchDetailsSuccess = (products) =>{
    console.log(products)
    return {
        type:FETCH_MARVEL_SUCCESS,
        payload: products
    }
}


let lastFiveSearchTerm = [];
export const fetchDetails = (searchTerm,isDisabled) =>{
    return (dispatch) =>{
    dispatch(fetchDetailsRequest)
    dispatch(fetchDetailsSuccess({searchItems:[],lastFiveSearchTerm:lastFiveSearchTerm,bool:true}));

        axios.get(`https://gateway.marvel.com/v1/public/${searchTerm}`, {
            params: {
                "apikey": "7e85f6c80c95a7deb7915bc0802a81e3",
                "hash": "304d026b3794c824be76608c90c3525e",
                "ts": 1
            }
          })
          .then(function (response) {
            console.log(response);
            if(lastFiveSearchTerm.length == 5){
                lastFiveSearchTerm.shift();
                lastFiveSearchTerm.push(searchTerm);
            }else{
                lastFiveSearchTerm.push(searchTerm);
            }
            dispatch(fetchDetailsSuccess({searchItems:response.data.data.results,lastFiveSearchTerm:lastFiveSearchTerm,bool:false}));
          })
          .catch(function (error) {
            console.log(error);
          })
    }
}
