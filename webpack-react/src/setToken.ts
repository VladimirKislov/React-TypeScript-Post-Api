import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
}

const initialState: RootState = {
    commentText: 'Your comment should be here',
    token: '',
}

const DATA_TOKEN = 'DATA_TOKEN';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
})

export const updateToken: ActionCreator<AnyAction> = (data) => ({
    type: DATA_TOKEN,
    data,
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
        default:
            return state;
    }
    
}