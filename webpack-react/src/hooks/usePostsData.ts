import React, { useEffect, useState } from "react";
import axios from 'axios';

export function usePostsData(token: string) {
  const [postData, setPostData] = useState()

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
        setPostData(posts)
      })
      .catch(console.log)

  }, [token])

  return [postData]
}