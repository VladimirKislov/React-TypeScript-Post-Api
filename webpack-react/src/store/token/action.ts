import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export type TokenRequestSuccessAction = {
    type: typeof TOKEN_REQUEST_SUCCESS,
    token: string,
}
export const TokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (token) => ({
    type: TOKEN_REQUEST_SUCCESS,
    token,
})

export const RequestToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (window.__token__ !== 'undefined') {
        dispatch(TokenRequestSuccess(window.__token__))
    }
}