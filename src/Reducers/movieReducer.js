const initialState=[]
const movieReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":{
            return(
                [...state,{...action.payload}]
            )
        }
        case "REMOVE":{
            console.log(action.payload)
            return state.filter((ele)=>{
                return(ele.id!==action.payload)
            })
        }
        case "ASCENDING":{
            // Object.keys(state).map((ele)=>{
            //     console.log(ele[0])
            // })

        }
        case "LOOK":{
            const movi=state
            if(action.payload){
                return([action.payload])
            }else if (!action.payload){
                return[...movi]
            }
            }
        default:{
            return [...state]
        }
    }
}
export default movieReducer