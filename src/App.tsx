import React from 'react';

import AppAside from "./components/aside/AppAside";

import './styles/app.scss';

function App() {
    return (
        <div className="app">
            <div className={'container'}>
                <div className={'app__container'}>
                    <AppAside />

                    <main className={'app__main'}>
                        Main
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
