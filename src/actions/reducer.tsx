import { SET_USER } from './type'
import jwt_decode from 'jwt-decode'

let user : any = jwt_decode((localStorage as any).getItem('user'))

const defalutState : any = {
  userID: user ? user.id : '',
  userImg: user ? user.img : '',
}

export default (state = defalutState, action:any) =>{
  let newState = null
  switch (action.type) {
    case SET_USER:
      newState = { 
        ...state, 
        userID: action.userID,
        userImg: action.userImg
      };
      break;
    default:
      newState = state;
      break;
    }
  return newState
}