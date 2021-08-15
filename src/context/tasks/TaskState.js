import React, { useReducer } from 'react';
import { apiGet, apiDelete, apiPatch, apiPost, apiPut } from '../../services/api';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_LOADING
} from '../types'

const TaskState = props => {

  const initialState = {
    tasks: [],
    task: {},
    loading: false
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
    setLoading();
    const tasks = await apiGet('/tasks');
    dispatch({
      type: GET_TASKS,
      payload: tasks
    })
    
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        loading: state.loading,
        getTasks,
        setLoading
      }}
    >
      {props.children}
    </TaskContext.Provider>

  );

}

export default TaskState;