import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { PostsContext } from './context/PostsContext';
import { usePostsData } from './hooks/usePostsData';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from './store';
import { tokenReducer } from './setToken';

// const store = createStore(rootReducer, composeWithDevTools())
const storeToken = createStore(tokenReducer, composeWithDevTools())


function AppComponent() {
    const [token] = useToken()
    const postData = usePostsData(token)

    return (
        // <Provider store={store}>
                    <PostsContext.Provider value={[postData]}>
                        <Layout>
                            <Header />
                            <Content>
                                <CardList />
                            </Content>
                        </Layout>
                    </PostsContext.Provider>
        // </Provider>
    )
}

export const App = hot(() => 
    <Provider store={storeToken}>
        <AppComponent />
    </Provider>
);
