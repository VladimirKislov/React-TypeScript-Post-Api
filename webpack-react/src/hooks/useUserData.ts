import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { MeRequestAsync } from '../store/me/meAction';

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const token = useSelector<RootState, string>(state => state.token.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if (token === '') return;
        dispatch(MeRequestAsync())
    }, [token])

    return [data]
}
