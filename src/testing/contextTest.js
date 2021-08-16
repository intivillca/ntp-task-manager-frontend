import React from 'react'
import ApiContext from '../context/api/apiContext';
import languageContext from '../context/language/languageContext';
import { useContext, useEffect } from 'react';

export const ContextTest = () => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const {getTasks, getCategories, getPeople, getStatus, } = context;
  

  useEffect(() => {
    getTasks();
    getCategories();
    getPeople();
    getStatus();
  }, []);

  console.log(context)

  return (
    
    <>
      
    </>
  )
}
