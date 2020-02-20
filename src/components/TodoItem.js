import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return{
            backgroundColor:'#f2f2f2',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todoList.completed ? 'line-through' : 'none'
        }
        // if(this.props.todos.completed){
        //     return{
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration:'none'
        //     }
        // }
    }
    

     render() {
        const {id, title} = this.props.todoList;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange= {this.props.markComplete.bind
                    (this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
const btnStyle={
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}
export default TodoItem
 