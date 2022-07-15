import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../store";

export function useToken() {
    const dispatch = useDispatch()

    useEffect(() => {
        if(window.__token__) {
            dispatch(updateToken(window.__token__))
        }
    }, [dispatch])
}