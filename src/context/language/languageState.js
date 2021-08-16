import React, {
  useReducer
} from 'react';
import languageContext from './languageContext';
import languageReducer from './languageReducer';
import {
  SET_EN,
  SET_HR
} from '../types'
import { ENG_PACK } from './langpacks/en';

const LanguageState = props => {
  console.log(ENG_PACK);
  const initialState = {
    lang: 'ENG',
    langPack: ENG_PACK
  }
const setHR = () => dispatch({ type: SET_HR });
const setEN = () => dispatch({ type: SET_EN });

  const [state, dispatch] = useReducer(languageReducer, initialState)
  return (<languageContext.Provider value={
    {
      lang: state.lang,
      langPack: state.langPack,
      setEN,
      setHR
    }
  } >
    {
      props.children
    } </languageContext.Provider>
  )
}

export default LanguageState;