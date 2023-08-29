import React from 'react';
import "./App.css"
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';

const App = () => {
    return (
        <>
        <Header />

        <main className='main'>
            <Home />
            <About />
        </main>
        </>
    )
}

export default App