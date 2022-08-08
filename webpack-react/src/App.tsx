import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tokenReducer } from './store/store';
import thunk from 'redux-thunk';
import { useUserData } from './hooks/useUserData';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(tokenReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    useToken()
    useUserData()
    return (
        <div>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header />
                        <Content>
                            <CardList />
                        </Content>
                    </Layout>
                </BrowserRouter>
            )
            }
        </div >
    )
}

export const App = hot(() =>
    <Provider store={store}>
        <AppComponent />
    </Provider>
);
