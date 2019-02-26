import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import List from '../containers/List'

import { getTodos } from '../actions/index'

class App extends Component {
    
    componentDidMount(){
        this.props.dispatchGetTodos()
    }

    render(){
        return (
            <div>
                <Header />
                <List />
                {/* <ul>
                    {this.props.todos.map((item) => {
                        return (
                            <li>{item.task}</li>
                        )
                    })}
                </ul> */}
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