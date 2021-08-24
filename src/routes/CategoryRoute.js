import React, { useContext, useEffect } from 'react'
import { AddSpc } from '../components/spc/AddSpc'
import { SpcTable } from '../components/spc/SpcTable'
import { HeaderNav } from '../components/ui/HeaderNav'
import languageContext from '../context/language/languageContext'
import ApiContext from '../context/api/apiContext'

export const CategoryRoute = (props) => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const context = useContext(ApiContext);
  const { categories, getCategories, addCategory } = context;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Category">
      <HeaderNav />

      <AddSpc
        function={addCategory}
        title={translation.Category}
        submit={translation.Submit}
        paramName={"category"}
      />

      <SpcTable
        data={categories}
        paramName={"category"}
        tableParam={translation.Category} />
    </div>
  )
}
