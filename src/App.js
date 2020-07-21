import React from 'react';
import Header from './components/Header';
import TodoRow from './components/TodoRow';


export default class App extends React.Component {
  state = {
    todo:[]
  }

  addTodo = todo => {
    this.setState({...this.state,todo:[...this.state.todo,{title:todo,done:false}]});
  }

  removeTodo = index => {
    const arr = [...this.state.todo];
    arr.splice(index,1);
    this.setState({...this.state,todo:[...arr]});
  }

  changeTodoStatus = (index, status) => {
    const arr = [...this.state.todo];
    arr[index] = {...this.state.todo[index],done:status};
    this.setState({...this.state,todo:[...arr]});
  }

  render(){
    return (
      <div>
        <Header addToDo={this.addTodo}/>
        <hr/>
        <ul>
          {this.state.todo.map((todo,i) => <li key={i}>
            <TodoRow 
            onDoneChangeHandler={this.changeTodoStatus} 
            onRemoveHandler={this.removeTodo} 
            index={i} 
            todo={todo}/>
            </li>)}
        </ul>
      </div>
    )
  }
}
