import {combineReducers} from 'redux'
import todos from './reducer_todos'

const reducers = combineReducers({
    todos
})
export default reducers