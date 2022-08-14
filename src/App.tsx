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
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NotFound } from './shared/NotFound';
import { StoreProvider, createStore as createEasy, action } from 'easy-peasy';

const store = createStore(tokenReducer, composeWithDevTools(applyMiddleware(thunk)))
const storeEasy = createEasy({
    values: 'Your comment should be here and now',
    add: action<any>((state, payload) => {
        state.values = payload
    })
})

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    useToken()
    useUserData()
    return (
        <StoreProvider store={storeEasy}>
            <div>
                {mounted && (
                    <BrowserRouter>
                        <Switch>
                            <Redirect exact from="/" to="/posts" />
                            <Redirect from="/auth" to="/posts" />
                            <Route exact path="/">
                                <Layout>
                                    <Header />
                                    <Content>
                                        <CardList />
                                    </Content>
                                </Layout>
                            </Route>
                            <Route path="/posts">
                                <Layout>
                                    <Header />
                                    <Content>
                                        <CardList />
                                    </Content>
                                </Layout>
                            </Route>
                            <Route path="/posts/:id" />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                )}
            </div >
        </StoreProvider>
    )
}

export const App = hot(() =>
    <Provider store={store}>
        <AppComponent />
    </Provider>
);
