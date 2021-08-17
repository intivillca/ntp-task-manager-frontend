import React from 'react'
import ApiContext from '../context/api/apiContext';
import languageContext from '../context/language/languageContext';
import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AddTask } from '../components/tasks/AddTask';
import { UpdateTask } from '../components/tasks/UpdateTask';

export const ContextTest = () => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const { getTasks, getCategories, getPeople, getStatus, createTask, getAll } = context;


  useEffect(() => {
    getTasks();
    getCategories();
    getPeople();
    getStatus();
    getAll();
  }, []);

  return (
    <>
    <UpdateTask/>
    </>
  )
}
