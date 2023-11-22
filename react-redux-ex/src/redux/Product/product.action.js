let INCR='INCR'
let DECR='DECR'
let incrAction=()=>{
    return {  type:INCR, payload:"Rahul"}
}
let decrAction=()=>{
    return {type:DECR}
}
export {incrAction,decrAction}