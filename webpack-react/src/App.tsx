import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { usePostsData } from './hooks/usePostsData';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tokenReducer } from './store/store';
import thunk from 'redux-thunk';

const store = createStore(tokenReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
    useToken()
    usePostsData()
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    )
}

export const App = hot(() =>
    <Provider store={store}>
        <AppComponent />
    </Provider>
);
