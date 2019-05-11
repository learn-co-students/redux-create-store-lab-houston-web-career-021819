import CabdyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(countReducer) {
  // add your code here
   let state = 0
    function dispatch(action) {
     state = countReducer(state, action)
     render()   
    }

   function getState() {
    console.log(state)
    return state
   }

   return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
 