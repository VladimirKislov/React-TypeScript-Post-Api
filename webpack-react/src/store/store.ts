import { ActionCreator, AnyAction, Reducer } from "redux";
import { meReducer, MeState } from "./me/meReducer";
import { TokenRequestSuccessAction, TOKEN_REQUEST_SUCCESS } from "./token/action";
import { tokenReducerSuccess, TokenState } from "./token/reducer";
import { 
    PostRequestAction,
    PostRequestSuccessAction,
    PostRequestErrorAction,
    POST_REQUEST,
    POST_REQUEST_SUCCESS,
    POST_REQUEST_ERROR
} from './post/postAction';
import {
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS
} from "./me/meAction";
import { PostReducer, PostState } from "./post/postReducer";

export type RootState = {
    commentText: string;
    token: TokenState;
    me: MeState;
    post: PostState;
}

const initialState: RootState = {
    commentText: 'Your comment should be here',
    token: {
        loading: false,
        token: '',
    },
    me: {
        loading: false,
        error: '',
        data: {
            name: '',
            iconImg: '',
        }
    },
    post: {
        loading: false,
        error: '',
        post: [],
        // after: '',
    },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string,
}


export const updatePosts: ActionCreator<AnyAction> = (posts) => ({
    type: UPDATE_POSTS_DATA,
    posts,
})
export type UpdatePostsAction = {
    type: typeof UPDATE_POSTS_DATA,
    posts: [],
}

type Action = TokenRequestSuccessAction
    | UpdateCommentAction
    | UpdatePostsAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | PostRequestAction
    | PostRequestSuccessAction
    | PostRequestErrorAction;

export const tokenReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case UPDATE_POSTS_DATA:
            return {
                ...state,
                postsData: action.posts
            }
        case TOKEN_REQUEST_SUCCESS:
            return {
                ...state,
                token: tokenReducerSuccess(state.token, action)
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        case POST_REQUEST:
        case POST_REQUEST_SUCCESS:
        case POST_REQUEST_ERROR:
            return {
                ...state,
                post: PostReducer(state.post, action)
            }
        default:
            return state;
    }
    
}