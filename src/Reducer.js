
let initialstate={
    Count:0
}
export const todoReducer=(state=initialstate,action)=>{
switch (action.type) {
    case 'Item_Increment':{
        
    
        return{
             Count:state.Count+ +(action.payload)
        }
    }
           case 'Item_Decrement':{
        return{
             Count:state.Count-parseInt(action.payload)
        } 
    
    }
        
            default: return state 
                
}
        }