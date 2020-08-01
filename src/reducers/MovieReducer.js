import {Movies} from "../actions/types"


const initialstate={
    movieList:[]
}

export default function(state=initialstate,action){
    return{
        ...state,
        items:action.payload
    }
}