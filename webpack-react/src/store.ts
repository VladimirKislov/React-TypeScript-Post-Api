import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
    postsData: [];
}

const initialState: RootState = {
    commentText: 'Your comment should be here',
    token: '',
    postsData: [],
}

const DATA_TOKEN = 'DATA_TOKEN';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})

export const updateToken: ActionCreator<AnyAction> = (data) => ({
    type: DATA_TOKEN,
    data,
})

export const updatePosts: ActionCreator<AnyAction> = (posts) => ({
    type: UPDATE_POSTS_DATA,
    posts,
})

export const tokenReducer: Reducer<RootState> = (state = initialState, action) => {
    switch(action.type) {
        case DATA_TOKEN:
            return {
                ...state,
                token: action.data
            }
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
        default:
            return state;
    }
    
}