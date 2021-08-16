import {
  SET_EN,
  SET_HR
} from '../types';
import { ENG_PACK } from './langpacks/en';
import { HR_PACK } from './langpacks/hr';


export default (state, action) => {
  switch(action.type){
    case SET_HR:
      return{
        ...state,
        langPack: HR_PACK
      }
      case SET_EN:
        return{
          ...state,
          langPack: ENG_PACK
        }
    default:
      return state;
  }
}