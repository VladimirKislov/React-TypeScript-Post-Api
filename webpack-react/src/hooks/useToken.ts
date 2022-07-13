import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../setToken";

export function useToken() {
    const [token, setToken] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        if(window.__token__) {
            setToken(window.__token__)
            dispatch(updateToken(window.__token__))
        }
    }, [dispatch])

    return [token]
}
