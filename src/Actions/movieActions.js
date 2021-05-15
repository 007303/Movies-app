export const add=(data)=>{
    return({
        type:'ADD',
        payload:data
    })
}
export const remove=(id)=>{
    return({
        type:"REMOVE",
        payload:id
    })
}
export const ascending=()=>{
    return({
        type:"ASCENDING"
    })
}
export const look=(e)=>{
    return({
        type:"LOOK",
        payload:e
    })
}
