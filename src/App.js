import react from 'react';
import './App.css';
class App extends react.Component{
  constructor(){
    super();
    this.state={todos:[{id:0,task:"eat",done:false},{id:1,task:"sleep",done:false}],newText:""};

  }
  
  handleAdd=()=>{

this.setState({todos: [...this.state.todos,{id:Math.random(),task:this.state.newText,done:false}] , 

newText:""
})
  }
  delete=(id)=>{
    this.setState({todos:this.state.todos.filter(el=> el.id !==id)})
  }
  don=(id)=>{
    
    this.setState({todos:this.state.todos.map(el=> el.id===id ?{...el,done:!el.done}:el ) })
    
  }


  render(){
    console.log(this.state.todos)
    return(
      <div>
        {
        this.state.todos.map(el=>
        <div>
      
        <li   style={{textDecoration: el.done? "line-through" : null}}  >{el.task}
        <span> :  </span>
        <button onClick={()=>this.don(el.id)}>done</button>
        <button onClick={()=>this.delete(el.id)}>remove</button>
        </li>
        
        </div>)
        }
        <input type="text" value={this.state.newText} onChange={(e)=>this.setState({newText:e.target.value})}></input>
        <button   onClick={this.handleAdd} >add</button>
        
</div>
    );
  }
}

export default App;
