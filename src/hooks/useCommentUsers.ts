import React, { useEffect, useState } from "react";
import axios from 'axios';

interface IPropsUsersComment {
  subreddit?: string,
  postId?: string,
}

export function useCommentUsers({ subreddit, postId }: IPropsUsersComment) {

  const [comment, setComment] = useState([])

  useEffect(() => {
    if (!subreddit) return

    axios.get(
      `https://api.reddit.com/${subreddit}/comments/${postId}`,
    )
      .then((response: { data: { data: { children: any; }; }[]; }) => {
        setComment(response.data[1].data.children)
      })
      .catch(console.log)
    
    return () => {
      setComment([])
    }
  }, [])
  
  return [comment]
}