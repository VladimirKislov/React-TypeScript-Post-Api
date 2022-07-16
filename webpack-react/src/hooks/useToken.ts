import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MeRequestAsync } from "../store/token/action";

export function useToken() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(MeRequestAsync())
    }, [])
}