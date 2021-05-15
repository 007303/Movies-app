import React from 'react'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'
import MovieStats from './MovieStats'
const MoviesContainer=(props)=>{
    return(
        <div >
            <MoviesList/>
            <div class="fixed-top" style={{width:"1500px",left:"200px"}}>
            <MoviesForm/>
            <MovieStats/>
            </div>
        </div>
    )
}
export default MoviesContainer