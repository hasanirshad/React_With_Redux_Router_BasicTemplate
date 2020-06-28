let ss = {a:0,b:2,c:'abc'}
  const objectReducer = (state = ss,action) =>{

    switch(action.type){
      case 'INCREMENT':
       state.a += action.number
       return state;
      case 'DECREMENT':
        return state - 1; 
        default: return state
    }
  }

  export default objectReducer;