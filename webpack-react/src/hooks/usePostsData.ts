import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState, updatePosts } from "../store/store";

export function usePostsData() {
  const dispatch = useDispatch()
  const token = useSelector<RootState, string>(state => state.meToken.token)

  useEffect(() => {
    if (token === '') return;
    axios.get(
      'https://oauth.reddit.com/best',
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )
      .then((resp) => {
        const posts = resp.data.data.children;
        dispatch(updatePosts(posts))
      })
      .catch(console.log)

  }, [token])
}