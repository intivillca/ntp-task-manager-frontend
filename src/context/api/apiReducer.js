import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_LOADING,
  GET_CATEGORIES,
  GET_PEOPLE
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      }
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
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