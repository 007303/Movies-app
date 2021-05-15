import {createStore,combineReducers} from 'redux'
import movieReducer from '../Reducers/movieReducer'
const Store=()=>{
    const configStore=createStore(combineReducers({
        movies:movieReducer
    }))
    return configStore
}
export default Store