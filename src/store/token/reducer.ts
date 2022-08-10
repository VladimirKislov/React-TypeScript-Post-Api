import { Reducer } from "react";
import {
    TokenRequestSuccessAction,
    TOKEN_REQUEST_SUCCESS
} from "./action";

export type TokenState = {
    loading: boolean,
    token: string,
}

type MeAction = TokenRequestSuccessAction;
export const tokenReducerSuccess: Reducer<TokenState, MeAction> = (state, action) => {
    switch (action.type) {
        case TOKEN_REQUEST_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false,
            }
        default:
            return state;
    }
}