import React, { useReducer } from 'react';
import { apiGet, apiDelete, apiPatch, apiPost, apiPut } from './api';
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
  ADD_PERSON,
  GET_ALL
} from '../types'

const ApiState = props => {

  const initialState = {
    tasks: [],
    task: {},
    categories: [],
    people: [],
    status: [],
    loading: false
  }

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  const getTasks = async () => {
    setLoading();
    const tasks = await apiGet('/tasks');
    dispatch({
      type: GET_TASKS,
      payload: tasks
    })

  }

  const createTask = async formData =>{
    await apiPost('/tasks', formData);
    getTasks();
    dispatch({
      type: CREATE_TASK
    })
  }

  const updateTask = async (id, formData) => {
    await apiPut(`/tasks/${id}`, formData);
    getTasks();
    dispatch({
      type: UPDATE_TASK
    })
  }

  const getCategories = async () => {
    setLoading();
    const categories = await  apiGet('/categories')
    dispatch({
      type: GET_CATEGORIES,
      payload: categories
    })
  }

  const getPeople = async () => {
    setLoading();
    const people = await  apiGet('/person')
    dispatch({
      type: GET_PEOPLE,
      payload: people
    })

  }
  const getStatus = async () => {
    setLoading();
    const status = await  apiGet('/status')
    dispatch({
      type: GET_ALL_STATUS,
      payload: status
    })
  }
  const getAll = async () => {
    setLoading();
    const [categories, people, status] = await Promise.all([
      apiGet('/categories'),
      apiGet('/person'),
      apiGet('/status'),
    ]);
    dispatch({
      type: GET_ALL,
      payload: {categories,people,status}
    })
  }


  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApiContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        loading: state.loading,
        categories: state.categories,
        people: state.people,
        status: state.status,
        getTasks,
        setLoading,
        getCategories,
        getPeople,
        getStatus,
        createTask,
        getAll,
        updateTask
      }}
    >
      {props.children}
    </ApiContext.Provider>

  );

}

export default ApiState;