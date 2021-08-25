import React, { useContext, useEffect } from 'react'
import { AddSpc } from '../components/spc/AddSpc'
import { SpcTable } from '../components/spc/SpcTable'
import { HeaderNav } from '../components/ui/HeaderNav'
import languageContext from '../context/language/languageContext'
import ApiContext from '../context/api/apiContext'

export const PersonRoute = (props) => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const context = useContext(ApiContext);
  const { people, getPeople, addPerson } = context;

  useEffect(() => {
    getPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Person">
      <HeaderNav />

      <SpcTable 
      data={people} 
      paramName={"firstname"} 
      paramName2={"lastname"} 
      tableParam={translation.AddPerson} /> 
    </div>
  )
}
