import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../Actions/movieActions'
import {HeartFillIcon} from "@primer/octicons-react"
const MoviesForm=(props)=>{
    const [name,setName]=useState("")
    const [rating,setRating]=useState("")
    const dispatch=useDispatch()
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleRating=(e)=>{
        setRating(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            id:Number(new Date()),
            Movie:name,
            rating:rating
        }
        setName("")
        setRating("")
        console.log(data)
        dispatch(add(data))
    }
    return(
        <div >
            <form onSubmit={handleSubmit} class="fixed-bottom">
            <div class="d-flex justify-content-end" >
                <div class="col-sm-4" >
                <h2 style={{alignContent:"end"}}>Add Movie</h2>
                <input type="text" value={name} onChange={handleName} placeholder="Enter Movie Name" style={{alignContent:"end"}} class="form-control"/><br/>
                <input type="number" value={rating} onChange={handleRating} placeholder="IMDB Ranking" style={{alignContent:"end"}} class="form-control"/> <HeartFillIcon size={24} /><br/>
                <input type="submit" value="Add" style={{alignContent:"end"}} className="btn btn-primary"/>
                </div>
                </div>
            </form>
        </div>

    )
}
export default MoviesForm