import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_LOADING,
  GET_CATEGORIES,
  GET_PEOPLE,
  GET_ALL_STATUS,
  GET_ALL
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
    case GET_ALL_STATUS:
      return {
        ...state,
        status: action.payload,
        loading: false
      }
    case GET_ALL:
      return{
        ...state,
        status: action.payload.status,
        people: action.payload.people,
        categories: action.payload.categories,
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CREATE_TASK:
      return{
        ...state
      }
    default:
      return state;
  }
}