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
  ADD_PERSON
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


  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApiContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        loading: state.loading,
        categories: state.categories,
        people: state.people,
        getTasks,
        setLoading,
        getCategories,
        getPeople
      }}
    >
      {props.children}
    </ApiContext.Provider>

  );

}

export default ApiState;