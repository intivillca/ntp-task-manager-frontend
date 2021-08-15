import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_LOADING
} from '../types';

export default (state,action) => {
  switch(applicationCache.type){
    case GET_TASKS:
      return{
        ...state,
        tasks: action.payload,
        loading: false
      };
    case SET_LOADING:
      return{
        ...state,
        loading: true
      };
    default:
      return state;
  }
}