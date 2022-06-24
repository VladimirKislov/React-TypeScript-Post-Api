import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/TokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContext } from './context/PostsContext';
import { usePostsData } from './hooks/usePostsData';

function AppComponent() {
    const [token] = useToken()
    const postData = usePostsData(token)
    
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContext.Provider value={[postData]}>
                    <Layout>
                        <Header />
                        <Content>
                            <CardList />
                        </Content>
                    </Layout>
                </PostsContext.Provider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent/>);
