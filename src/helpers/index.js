const StateHook =()=>{
    let  value ;
    const setValue =(param)=>{
      value = param
      
    }
    
    
      return {value,setValue}
  }
  
  export default StateHook;