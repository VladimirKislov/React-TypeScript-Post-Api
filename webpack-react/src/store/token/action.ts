import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export type TokenRequestAction = {
    type: typeof TOKEN_REQUEST,
}
export const TokenRequest: ActionCreator<TokenRequestAction> = () => ({
    type: TOKEN_REQUEST,
})


export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type TokenRequestSuccessAction = {
    type: typeof TOKEN_REQUEST_SUCCESS,
    token: string,
}
export const TokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (token) => ({
    type: TOKEN_REQUEST_SUCCESS,
    token,
})


export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
export type TokenRequestErrorAction = {
    type: typeof TOKEN_REQUEST_ERROR,
    error: string,
}
export const TokenRequestError: ActionCreator<TokenRequestErrorAction> = (error) => ({
    type: TOKEN_REQUEST_ERROR,
    error,
})

export const MeRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(TokenRequest())
    if (window.__token__ !== 'undefined') {
        dispatch(TokenRequestSuccess(window.__token__))
    } else {
        dispatch(TokenRequestError('error'))
    }
}