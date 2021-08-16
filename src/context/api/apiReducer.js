import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch(action.type){
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}