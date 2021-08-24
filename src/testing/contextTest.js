import React from 'react'
import ApiContext from '../context/api/apiContext';
import languageContext from '../context/language/languageContext';
import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { AddTask } from '../components/tasks/AddTask';
import { UpdateTask } from '../components/tasks/UpdateTask';
import { DeleteTask } from '../components/tasks/DeleteTask';
import { SearchTask } from '../components/tasks/SearchTask';
import { apiGet } from '../context/api/api';
import { SpcTable } from '../components/spc/SpcTable';
import { AddSpc } from '../components/spc/AddSpc';

export const ContextTest = () => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const { getTasks, getCategories, getPeople, getStatus, createTask, getAll, status,categories,people, addCategory } = context;

  useEffect(() => {
    getTasks();
    getCategories();
    getPeople();
    getStatus();
    getAll();
  }, []);
  return (
    <>
    {/*
    <SpcTable 
    data={categories} 
    paramName={"category"} 
    tableParam={"test"} />
    <SpcTable data={status} paramName={"status"} tableParam={"test"} /> 
    <SpcTable data={people} paramName={"firstname"} paramName2={"lastname"} tableParam={"test"} /> 
    */ }
    <SpcTable 
    data={categories} 
    paramName={"category"} 
    tableParam={translation.Category} />
    <AddSpc 
    function={addCategory}
    title = {translation.Category}
    />
    </>
  )
}
