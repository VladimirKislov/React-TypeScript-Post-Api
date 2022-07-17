import { ActionCreator, AnyAction, Reducer } from "redux";
import { meReducer, MeState } from "./me/meReducer";
import { TokenRequestSuccessAction, TOKEN_REQUEST_SUCCESS } from "./token/action";
import { tokenReducerSuccess, TokenState } from "./token/reducer";
import {
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS
} from "./me/meAction";

export type RootState = {
    commentText: string;
    postsData: [];
    token: TokenState;
    me: MeState;
}

const initialState: RootState = {
    commentText: 'Your comment should be here',
    postsData: [],
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
    | MeRequestErrorAction;

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
        default:
            return state;
    }
    
}