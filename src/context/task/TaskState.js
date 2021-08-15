import React , {useReducer} from 'react';
import {apiGet, apiDelete, apiPost, apiPatch} from '../../services/api';

import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';

import {
  GET_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_LOADING
} from '../types';

const TaskState = props => {

  const initialState = {
    tasks: [],
    task: {},
    loading: false
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // GET TASKS

  const getTasks = () =>{

  }

  // SET LOADING

  const setLoading = () => dispatch({type: SET_LOADING})

  return <TaskContext.Provider
    value={{
      task : state.task,
      task : state.task,
      loading : state.loading
    }}
  >
    {props.children}
  </TaskContext.Provider>
}

export default TaskState