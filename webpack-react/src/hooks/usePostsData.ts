import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PostRequestAsync } from "../store/post/postAction";

export function usePostsData() {
  const dispatch = useDispatch()
  const token = useSelector<RootState, string>(state => state.token.token)

  useEffect(() => {
    if (token === '') return;
    dispatch(PostRequestAsync())
  }, [token])
}