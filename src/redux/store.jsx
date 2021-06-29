import { createStore } from 'redux'
import laptopReducer from './reducers/laptopReducer'

const store = createStore(laptopReducer)

export default store
