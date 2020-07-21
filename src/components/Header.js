import React from 'react';

export default class extends React.Component{
    state = {
        userInp:''
    }

    addClickHandler = () => {
        this.props.addToDo(this.state.userInp);
        this.setState({userInp:''});
    }

    render(){
        return (
        <>
            <input 
                type='text' 
                value={this.state.userInp} 
                onChange={(e) => this.setState({userInp:e.target.value})} 
            />
            <button onClick={this.addClickHandler}>Add</button>
        </>
        );
    }
}