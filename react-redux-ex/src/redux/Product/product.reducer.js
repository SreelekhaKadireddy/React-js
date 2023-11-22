import {INCR,DECR} from './product.action';
let initialState={
    product:{
        p_id:'p101',
        p_name:'IPhone 18',
        qty:1
    }
}
let productReducer=(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR:
            return{...state,qty:state.qty+1}
        case DECR:
            return{...state,qty:state.qty-1}
        default:
            return state
    }


}
export {productReducer}