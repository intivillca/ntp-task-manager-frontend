import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import languageContext from '../../context/language/languageContext';

export const ChangeLang = () => {
  const langContext = useContext(languageContext);

  return (
    <>
    <Button onClick={langContext.setHR}>
      Hrvatski
    </Button>

    <Button onClick={langContext.setEN}>
       Engleski
     </Button>
     </>
  )
}
