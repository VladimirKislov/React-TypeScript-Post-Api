import { ActionCreator, AnyAction, Reducer } from "redux";
import { TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./token/action";
import { meReducer, MeTokenState } from "./token/reducer";

export type RootState = {
    commentText: string;
    postsData: [];
    meToken: MeTokenState;
}

const initialState: RootState = {
    commentText: 'Your comment should be here',
    postsData: [],
    meToken: {
        loading: false,
        error: '',
        token: '',
    }
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})

export const updatePosts: ActionCreator<AnyAction> = (posts) => ({
    type: UPDATE_POSTS_DATA,
    posts,
})

export const tokenReducer: Reducer<RootState> = (state = initialState, action) => {
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
        case TOKEN_REQUEST:
        case TOKEN_REQUEST_SUCCESS:
        case TOKEN_REQUEST_ERROR:
            return {
                ...state,
                meToken: meReducer(state.meToken, action)
            }
        default:
            return state;
    }
    
}