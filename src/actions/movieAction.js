import { Movies } from "./types";


export const fetchMovies=()=>
     (dispatch)=> {
        const url = `https://yts.mx/api/v2/list_movies.json?limit=${this.state.limit}&&page=${this.state.page}`;
        axios
            .get(url)
            .then((item) =>dispatch({
                type:Movies,
                payload:item
            }))
    }
