import React from 'react'
import {useDispatch} from 'react-redux'
import {remove} from '../Actions/movieActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TrashIcon} from '@primer/octicons-react'
const MoviesCard=(props)=>{
    const dispatch=useDispatch()
    const {movie}=props
    console.log(props)
    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
    return(
                    <div class="col-sm-3">
                    <div class="card-deck mt-2"></div>
                    <div className="card" style={{width:"12rem"}}>                       
                    <div className="card-body"  >
                        <h5 className="card-title" >Name:{movie.Movie}</h5>
                        <p className="card-text" >Rating:{movie.rating}</p>
                        <button onClick={()=>{handleRemove(movie.id)}} class="btn btn-primary" ><TrashIcon size={24} /> </button>
                    </div>
                    </div>
                </div>
    )
}
export default MoviesCard
// {/* <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}