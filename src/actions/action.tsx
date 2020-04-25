import { SET_USER } from './type'

export const changeUserAction = (value:any) => ({
  type: SET_USER,
  userID: value.userID,
  userImg: value.userImg
})