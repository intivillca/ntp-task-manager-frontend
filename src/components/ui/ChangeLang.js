import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import languageContext from '../../context/language/languageContext';

export const ChangeLang = () => {
  const langContext = useContext(languageContext);
  if (langContext.lang === "HR") {
    return (
      <>
        <Button variant="secondary" onClick={langContext.setEN}>
          English
        </Button>
      </>
    )
  }
  if (langContext.lang === "ENG") {
    return (
      <>
        <Button variant="secondary" onClick={langContext.setHR}>
          Hrvatski
        </Button>
      </>
    )
  }
}
