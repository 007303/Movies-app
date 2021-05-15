import React,{useEffect, useState} from 'react'
import MoviesCard from './MoviesCard'
import {useSelector,useDispatch} from 'react-redux'
import {look,ascending} from '../Actions/movieActions'
const MoviesList=(props)=>{
    const [search,setSearch]=useState("")
    const [sort,setSort]=useState("")
    //const [final,setFinal]=useState([])
    const dispatch=useDispatch()
    const movies=useSelector((state)=>{
        return (state.movies)
        
    })
    const [fil,setFil]=useState([])
    useEffect(()=>{
        setFil(movies)
    },[movies])
    console.log(fil)
    let final=movies
    const handleSearch=(e)=>{
        setSearch(e.target.value)
        const filtered=movies.filter((movi)=>{
            return (movi.Movie.toLowerCase().includes(search.toLowerCase()))
        })
        setFil(filtered)
        if(e.target.value==""){
            setFil(movies)
        }
        console.log(search )
    }
    const movi=[...movies]
    const handleSort=(e)=>{
        setSort(e.target.value)
        const res=movi.sort((a,b)=>{
            let name1=a.Movie.toLowerCase()
            let name2=b.Movie.toLowerCase()
            if(name1<name2){
                return -1
            }else if(name1>name2){
                return 1
            }else {
                return 0
            }
        })
        //console.log(res)
        if(e.target.value=="Ascending"){
        setFil(res)
    }else if(e.target.value=="Descending"){
        const des=res.reverse()
        setFil(des)
        console.log(des)
    }else if(e.target.value==""){
        setFil(movies)
    }
    }
    return(
        <div >
            <div class="col-md-4">
            <h1>My Movies</h1>
            </div>
            <form>
                <div class="row">
                <div class="col-md-6">
                <input type="text" value={search} onChange={handleSearch} placeholder="Search" class="form-control"/>
                </div>
                <div class="col-md-2">
                <select value={sort} onChange={handleSort} class="form-control">
                    <option value="">select</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
                </div>
                </div>
                <br/>
            </form>
            <div class="card-deck" style={{width:"50rem"}}>
            <div class="row">
            {fil.map((ele)=>{
                return(<MoviesCard movie={ele} key={ele.id}/>)
            })}
            </div>
            </div>
        </div>
    )
}
export default MoviesList