import _ from 'lodash'

import {FETCH_POSTS,FETCH_POST, DELETE_POST} from '../actions/index'

export default function(state={},action){
  switch(action.type){
    case DELETE_POST:
      //id is the payload
      return _.omit(state,action.payload)
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,'id')
    case FETCH_POST:
      const post=action.payload.data
      // const newState = {...state}
      // newState[post.id]=post
      // return newState
      return { ...state, [post.id]:post};
    default:
      return state
  }
}
