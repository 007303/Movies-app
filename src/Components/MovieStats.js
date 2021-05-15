import React from 'react'
import {useSelector} from 'react-redux'
const MovieStats=(props)=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    const handleRank=()=>{
        const minimum=movies.map((ele)=>{
            const rating=ele.rating
            return rating
        })
        const rate=Math.min(...minimum)
        const movie=movies.map((ele)=>{
            if(ele.rating==rate){
                return ele.Movie
            }
        })
        return movie
    }
    return(
        <div >
            <div class="d-flex justify-content-end">
            <div class="col-md-5"  >
            <h4>Total Movies-{movies.length}</h4>
            <h4>#Top ranked Movie {handleRank()}</h4>
            </div>
            </div>
        </div>
    )
}
export default MovieStats