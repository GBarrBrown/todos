import React, {Component} from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'

import { getTodos } from '../actions'

class App extends Component {
    
    componentDidMount(){
        this.props.dispatchGetTodos()
    }

    render(){
        return (
            <div>
                <Header />
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