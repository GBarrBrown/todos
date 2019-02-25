import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../actions'

class App extends Component {
    
    componentDidMount(){
        this.props.dispatchGetTodos()
    }

    render(){
        return (
            <div>
                <h1>TODOS</h1>
                <ul>
                    {this.props.todos.map((item) => {
                        return (
                            <li>{item.task}</li>
                        )
                    })}
                </ul>
            </div>
            )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchGetTodos: () => dispatch(getTodos())
    }

}

function mapStateToProps(state) {

    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)