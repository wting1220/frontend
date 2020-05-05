import { SET_USER, SET_IMGS, DELETE_IMGS } from './type'
import jwt_decode from 'jwt-decode'

let user : any = (localStorage as any).getItem('user') && jwt_decode((localStorage as any).getItem('user'))

const defalutState : any = {
  userID: user ? user.id : '',
  userImg: user ? user.img : '',
  imgs: [],
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
    case SET_IMGS:
      newState = Object.assign({}, state, {
        imgs: [
          ...state.imgs,
          action.img,
        ]
      })
      break;
    case DELETE_IMGS:
      newState = []
      break;
    default:
      newState = state;
      break;
    }
  return newState
}