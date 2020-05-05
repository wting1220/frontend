import { SET_USER, SET_IMGS, DELETE_IMGS } from './type'

export const changeUserAction = (value:any) => ({
  type: SET_USER,
  userID: value.userID,
  userImg: value.userImg
})

export const changeImgsAction = (value: any) => ({
  type: SET_IMGS,
  img: value,
})

export const deleteImgsAction = () => ({
  type: DELETE_IMGS,
})