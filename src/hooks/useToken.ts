import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RequestToken } from "../store/token/action";

export function useToken() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(RequestToken())
    }, [])
}