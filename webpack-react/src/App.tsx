import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContext } from './context/PostsContext';
import { usePostsData } from './hooks/usePostsData';
import { CommentContext } from './context/CommentContext';

function AppComponent() {
    const [commentValue, setCommentValue] = useState('')
    const [token] = useToken()
    const postData = usePostsData(token)

    const CommentProvider = CommentContext.Provider;

    return (
        <tokenContext.Provider value={token === '' || token === undefined ? '' : token}>
            <UserContextProvider>
                <PostsContext.Provider value={[postData]}>
                    <CommentProvider value={{
                        value: commentValue,
                        onChange: setCommentValue,
                    }}>
                        <Layout>
                            <Header />
                            <Content>
                                <CardList />
                            </Content>
                        </Layout>
                    </CommentProvider>
                </PostsContext.Provider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent />);
