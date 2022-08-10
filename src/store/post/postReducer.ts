import { Reducer } from "react";
import {
    PostRequestAction,
    PostRequestErrorAction,
    PostRequestSuccessAction,
    POST_REQUEST,
    POST_REQUEST_ERROR,
    POST_REQUEST_SUCCESS
} from "./postAction";

export type PostState = {
    loading: boolean,
    error: string,
    post: Array<any>,
    // after: string,
}

type PostAction = PostRequestAction | PostRequestSuccessAction | PostRequestErrorAction;

export const PostReducer: Reducer<PostState, PostAction> = (state, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case POST_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        case POST_REQUEST_SUCCESS:
            return {
                ...state,
                post: action.post,
                loading: false,
                // after: action.after,
            }
        default:
            return state;
    }
}