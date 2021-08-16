import React, { useReducer } from 'react';
import { apiGet, apiDelete, apiPatch, apiPost, apiPut } from '../../services/api';
import ApiContext from './apiContext';
import ApiReducer from './apiReducer';
import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_LOADING,
  GET_ALL_STATUS,
  ADD_STATUS,
  GET_CATEGORIES,
  ADD_CATEGORY,
  GET_PEOPLE,
  ADD_PERSON
} from '../types'

const TaskState = props => {

  const initialState = {
    tasks: [],
    task: {},
    categories: [],
    people: [],
    status: [],
    loading: false
  }

  const [state, dispatch] = useReducer(ApiReducer, initialState);

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
    <ApiContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        loading: state.loading,
        getTasks,
        setLoading
      }}
    >
      {props.children}
    </ApiContext.Provider>

  );

}

export default TaskState;