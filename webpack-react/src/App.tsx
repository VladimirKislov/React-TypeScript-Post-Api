import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';
import { GenericList } from './shared/GenericList/GenericList';
import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';

const LIST = [
    {As: 'li' as const, text: 'some', className: 'text-content'},
    {As: 'li' as const, text: 'other some', className: 'text-content'},
    {As: 'li' as const, text: 'some', className: 'text-content'},
].map(generateId)

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id !== id));
    }

    const handleAdd = () => {
        setList(list.concat(generateId({ text: generateRandomString(), className: 'text', As: 'li' as const })))
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                <button onClick={handleAdd}>Add Element</button>
                <GenericList list={list.map(merge({onClick: handleItemClick}))} />
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>);
