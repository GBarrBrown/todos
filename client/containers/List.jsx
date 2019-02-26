import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../actions/index';

class List extends Component {
    constructor(){
        super()

    }

    componentDidMount(){
        this.props.dispatchGetTodos()
    }
    

    render(){
        return (
            <div>
                {this.props.todos.length > 0 && (
                    <div className='tasks-container'>
                        {this.props.todos.map((item) => {
                            return (<div className='task-container'>
                                Task: {item.task}<br />
                                Category: {item.category}<br />
                                Priority: {item.priority}<br />
                                Due: {item.due_at}<br />
                                Completed: <input type="radio" checked={item.is_completed}/>
                                </div>)
                        })}
                    </div>
                )}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatchGetTodos: () => dispatch(getTodos())
    }
}

function mapStateToProps(state){
    return {
        // get state.todos (global state) and make it 
        // available on this.props.todos
        todos: state.todos
    }
}

// allow mapStateToProps function access to store and 
// passes the stores state as the first arguement
export default connect(mapStateToProps, mapDispatchToProps)(List)