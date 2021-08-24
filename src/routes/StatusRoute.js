import React, { useContext, useEffect } from 'react'
import { AddSpc } from '../components/spc/AddSpc'
import { SpcTable } from '../components/spc/SpcTable'
import { HeaderNav } from '../components/ui/HeaderNav'
import languageContext from '../context/language/languageContext'
import ApiContext from '../context/api/apiContext'

export const StatusRoute = (props) => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const context = useContext(ApiContext);
  const { status, getStatus, addStatus } = context;

  useEffect(() => {
    getStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Status">
      <HeaderNav />

      <AddSpc
        function={addStatus}
        title={translation.Status}
        submit={translation.Submit}
        paramName={"status"}
      />

      <SpcTable
        data={status}
        paramName={"status"}
        tableParam={translation.Status} />
    </div>
  )
}
