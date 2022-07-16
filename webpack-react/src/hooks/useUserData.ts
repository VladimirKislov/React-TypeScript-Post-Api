import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({})
    const token = useSelector<RootState, string>(state => state.meToken.token)

    useEffect(() => {
        if (token === '') return;
        axios.get(
            'https://oauth.reddit.com/api/v1/me',
            {
                headers: { Authorization: `bearer ${token}` }
            }
        )
            .then((resp) => {
                const userData = resp.data;
                setData({ name: userData.name, iconImg: userData.icon_img.split('?').shift() })
            })
            .catch(console.log)
    }, [token])

    return [data]
}
