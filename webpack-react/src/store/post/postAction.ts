import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { dataAfter, RootState } from "../store";

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
  type: typeof POST_REQUEST,
}
export const PostRequest: ActionCreator<PostRequestAction> = () => ({
  type: POST_REQUEST,
})

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
  type: typeof POST_REQUEST_SUCCESS,
  post: Array<any>,
}
export const PostRequestSuccess: ActionCreator<PostRequestSuccessAction> = (post) => ({
  type: POST_REQUEST_SUCCESS,
  post,
})

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErrorAction = {
  type: typeof POST_REQUEST_ERROR,
  error: string,
}
export const PostRequestError: ActionCreator<PostRequestErrorAction> = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
})

export const PostRequestAsync = (afters?: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(PostRequest())
  axios.get(
    'https://oauth.reddit.com/best',
    {
      headers: { Authorization: `bearer ${getState().token.token}` },
      params: {
        limit: 5,
        after: afters,
      }
    }
  )
    .then((resp) => {
      const posts = resp.data.data.children;
      const after = resp.data.data.after;
      dispatch(PostRequestSuccess(posts))
      dispatch(dataAfter(after))
    })
    .catch((error) => {
      console.log(error)
      dispatch(PostRequestError(error))
    })
}